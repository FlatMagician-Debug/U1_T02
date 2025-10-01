const fileInput = document.getElementById('fileInput');
const output = document.getElementById('output');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        // Intentar parsear para asegurar que es JSON válido
        const jsonData = JSON.parse(e.target.result);
        // Mostrar el JSON con indentación
        output.textContent = JSON.stringify(jsonData, null, 2);
      } catch (err) {
        output.textContent = "Error: El archivo no es un JSON válido.";
      }
    };
    reader.readAsText(file);
  }
});