$(function() {
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    // console.log(this.value);
    // dataset method returns an object of all the data attribute keys and values (without 'data' prefix)
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate))
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

})
