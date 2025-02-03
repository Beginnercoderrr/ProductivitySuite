document.getElementById('theme-toggle').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Task Management
document.getElementById('add-task').addEventListener('click', () => {
  const title = document.getElementById('task-title').value.trim();
  if (!title) return;
  
  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item', 'glass');
  taskItem.innerHTML = `<span>${title}</span> <button onclick="this.parentElement.remove()">Delete</button>`;
  taskList.appendChild(taskItem);

  document.getElementById('task-title').value = '';
});

// Notes Management
document.getElementById('save-note').addEventListener('click', () => {
  const noteText = document.getElementById('note-editor').querySelector('.ql-editor').innerHTML;
  if (!noteText.trim()) return;

  const notesList = document.getElementById('notes-list');
  const noteItem = document.createElement('div');
  noteItem.classList.add('glass', 'note-item');
  noteItem.innerHTML = noteText;
  notesList.appendChild(noteItem);

  document.getElementById('note-editor').querySelector('.ql-editor').innerHTML = '';
});

// Calendar
new FullCalendar.Calendar(document.getElementById('calendar'), { initialView: 'dayGridMonth' }).render();

// Quill Editor for Tasks & Notes
new Quill('#task-editor', { theme: 'snow' });
new Quill('#note-editor', { theme: 'snow' });
