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
} as const;

export const languages = {
    id: 'Bahasa Indonesia',
    en: 'English',
}

export const getLangFromUrl = (url: URL): keyof typeof ui => {
    const path = url.pathname;
    if (path.startsWith('/en')) return 'en';
    return 'id'; // Default to Indonesian
}

export const useTranslations = (lang: keyof typeof ui) => {
    return (key: keyof typeof ui['id']) => {
        return ui[lang][key] || key;
    };
}