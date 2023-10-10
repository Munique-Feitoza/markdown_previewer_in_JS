const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function updatePreview() {
    const markdown = editor.value;
    const html = marked(markdown);
    preview.innerHTML = html;
}

editor.addEventListener("input", updatePreview);
editor.value = `# Título
## Subtítulo

[Link de exemplo](https://www.example.com)

\`\`\`

// Código embutido

function exemplo() {

    return "Hello, World!";

}

\`\`\`

- Item de lista 1

- Item de lista 2

> Citação em bloco

![Imagem de exemplo](https://via.placeholder.com/150)

**Texto em negrito**`;

updatePreview();
