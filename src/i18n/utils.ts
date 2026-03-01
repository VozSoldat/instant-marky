export const ui = {
    id: {
        'title': 'InstantMarky - Publikasi Instan',
        'editor.placeholder': '# Judul Markdown Anda...',
        'editor.hint': 'Ketik markdown di bawah. Link akan terupdate otomatis.',
        'btn.edit': 'Edit Konten',
        'btn.reset': 'Hapus & Baru',
        'btn.copy': 'Salin Link Publikasi',
        'btn.copied': 'Tersalin!',
        'conf.reset': 'Hapus semua konten dan buat baru?',
        'char.count': 'karakter di URL'
    },
    en: {
        'title': 'InstantMarky - Publish Instantly',
        'editor.placeholder': '# Your Markdown Title...',
        'editor.hint': 'Type markdown below. The link updates automatically.',
        'btn.edit': 'Edit Content',
        'btn.reset': 'Reset & New',
        'btn.copy': 'Copy Publish Link',
        'btn.copied': 'Copied!',
        'conf.reset': 'Delete all content and start over?',
        'char.count': 'characters in URL'
    },
    jv: {
        'title': 'InstantMarky - Wara-Wara Gepyakan',
        'editor.placeholder': '# Irah-Irahan Markdown Sampeyan...',
        'editor.hint': 'Tulis markdown ing ngisor. Pranala bakal mbarui dewe.',
        'btn.edit': 'Sunting Isi',
        'btn.reset': 'Busak & Anyar',
        'btn.copy': 'Salin Pranala Wara-Wara',
        'btn.copied': 'Wis Tersalin!',
        'conf.reset': 'Busak kabeh isi lan mulai maneh?',
        'char.count': 'karakter ing URL'
    },
} as const;

export const languages = {
    // Urutkan berdasarkan abjad nama entitas bahasa
    en: 'English',
    id: 'Bahasa Indonesia',
    jv: 'Basa Jawa',

}

export const getLangFromUrl = (url: URL): keyof typeof ui => {
    const path = url.pathname.split('/')[1]; // Ambil segmen pertama setelah domain
    if (path in ui) {
        return path as keyof typeof ui;
    }
    return 'id';
}

export const useTranslations = (lang: keyof typeof ui) => {
    return (key: keyof typeof ui['id']) => {
        return ui[lang][key] || key;
    }
}