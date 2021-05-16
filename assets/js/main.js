tippy('[data-tippy-content]', {
  theme: 'font',
  animation: 'scale',
  placement: 'bottom',
  arrow: false,
});
function back() {
  window.history.back();
};

if (localStorage.getItem('youAre') === null) {
    localStorage.setItem('youAre', 'Sexy');
}
