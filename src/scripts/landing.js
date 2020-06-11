// Scroll Effect
const TopOffset = 85;

$('a[data-smooth]').click(function () {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate(
        {
          scrollTop: target.offset().top - TopOffset,
        },
        1000
      );
      return false;
    }
  }
});
// End of Scroll Effect
