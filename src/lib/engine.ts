import LZString from 'lz-string';
import { marked } from 'marked';

export const Engine = {
    // Kompres string panjang ke URL fragment
    encode: (text: string): string => {
        return LZString.compressToEncodedURIComponent(text);
    },

    // Dekompres dari URL fragment
    decode: (hash: string): string => {
        return LZString.decompressFromEncodedURIComponent(hash) || "";
    },

    // Render Markdown ke HTML
    render: (markdown: string): string => {
        return marked.parse(markdown, { gfm: true, breaks: true }) as string;
    }
};