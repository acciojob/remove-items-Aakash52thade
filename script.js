document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('input[type="button"][value="Select and Remove"]');

  button.addEventListener('click', function () {
    const select = document.getElementById('colorSelect');
    const selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
      select.remove(selectedIndex);
    }
  });
});
