import { marked } from 'marked';
import LZString from 'lz-string';

export const Engine = {
    encode: (text: string) => LZString.compressToEncodedURIComponent(text),

    decode: (hash: string) => LZString.decompressFromEncodedURIComponent(hash) || "",

    render: (markdown: string) => {
        // Tambahkan opsi mangled: false dan headerIds: false jika perlu
        return marked.parse(markdown, {
            gfm: true,
            breaks: true,
        });
    }
};