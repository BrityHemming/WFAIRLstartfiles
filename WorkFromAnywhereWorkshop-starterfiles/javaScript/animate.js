
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  // GENERAL SETTING
  window.sr = ScrollReveal({ reset: false });

  // Custom Settings
  sr.reveal('.one', {
    viewFactor: 0
  });
  sr.reveal('.two', {
    viewFactor: 0
  });
  sr.reveal('.three', {
    viewFactor: 0
  });
  sr.reveal('.animate', {
    viewFactor: 0
  });
}else
{

  // GENERAL SETTING
  window.sr = ScrollReveal({ reset: true });

  // Custom Settings
  sr.reveal('.one', {
    viewFactor: 0.5
  });
  sr.reveal('.two', {
    viewFactor: 0.5
  });
  sr.reveal('.three', {
    viewFactor: 0.5
  });
  sr.reveal('.animate', {
    viewFactor: 0.5
  });
}
