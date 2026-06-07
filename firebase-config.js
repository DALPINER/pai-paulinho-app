/* ================================================================
   firebase-config.js — Configuração do Firebase Firestore
   Terreira Paulinho App — Fase E (Banco de Dados em Nuvem)
   ================================================================

   📋 COMO CONFIGURAR:
   1. Acesse https://console.firebase.google.com
   2. Crie um projeto → "Adicionar aplicativo" → escolha Web (</>)
   3. Copie o objeto firebaseConfig gerado
   4. Cole os valores nas constantes FIREBASE_CONFIG abaixo
   5. No Firestore Database, clique em "Criar banco de dados"
      → Escolha "Iniciar no modo de produção" → Localização: southamerica-east1
   6. Em "Regras" do Firestore, cole as regras abaixo:
      
      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /site_config/{doc} {
            allow read: if true;
            allow write: if false; // Admin escreve via Firebase Console ou SDK autenticado
          }
        }
      }

   ================================================================ */

const FIREBASE_CONFIG = {
  apiKey:            "COLE_SUA_API_KEY_AQUI",
  authDomain:        "SEU-PROJETO.firebaseapp.com",
  projectId:         "SEU-PROJETO-ID",
  storageBucket:     "SEU-PROJETO-ID.appspot.com",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId:             "SEU_APP_ID"
};

/* ================================================================
   ⛔ NÃO EDITE ABAIXO DESTA LINHA
   ================================================================ */

// Detecta se as chaves foram preenchidas
const _CONFIGURED = !Object.values(FIREBASE_CONFIG).some(v =>
  typeof v === 'string' && (v.startsWith('COLE_') || v.startsWith('SEU'))
);

window.FIREBASE_CONFIGURED = _CONFIGURED;
window.db = null;

if (_CONFIGURED) {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    window.db = firebase.firestore();

    // Habilitar cache offline (PWA-ready)
    window.db.enablePersistence({ synchronizeTabs: true }).catch(() => {});

    console.log('%c⚡ Firestore conectado — Terreira Paulinho', 'color:#c9a84c;font-weight:bold');
  } catch (e) {
    console.error('[Firebase] Falha ao inicializar:', e.message);
    window.FIREBASE_CONFIGURED = false;
  }
} else {
  console.warn(
    '%c[Firebase] Chaves não configuradas.\nUsando localStorage como fallback.\nEdite firebase-config.js com suas credenciais.',
    'color:#e8c96a'
  );
}
