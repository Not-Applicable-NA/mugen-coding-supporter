export function trimTextLine(input: string): string {
    let textLine = input.replace(/\s+/g, ''); // 空白文字を削除
    if (textLine.indexOf(';') !== -1) {
        textLine = textLine.substring(0, textLine.indexOf(';')) // ';'以降を削除
    }
    return textLine;
}