// Fügt einen Event-Listener hinzu, der auf Tastendrücke reagiert
document.addEventListener("keydown", (event) => {
  // Wählt alle Elemente mit der Klasse "box" aus
  document.querySelectorAll(".box").forEach((box, index) => {
    // Bestimmt die Drehrichtung basierend auf der gedrückten Taste:
    // Pfeil nach oben → +1, Pfeil nach unten → -1, andere Tasten → 0
    const increment =
      event.key === "ArrowUp" ? 1 : event.key === "ArrowDown" ? -1 : 0;
    // Holt den aktuellen Drehwinkel aus der benutzerdefinierten CSS-Variable --a
    const currentAngle =
      parseFloat(getComputedStyle(box).getPropertyValue("--a")) || 0;
    // Setzt die neue Drehung der Box basierend auf der Tasteingabe
    box.style.setProperty("--a", `${currentAngle + increment}turn`);
    // Gibt den neuen Winkel zur Konsole aus (zur Fehleranalyse)
    console.log(`Box ${index + 1}:`, currentAngle + increment); // Debugging
  });
});
