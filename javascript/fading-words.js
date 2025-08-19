$(".fade-in-container").ready(() => {
  $(".fade-in-container > *").each((i, v) => {
    $(v).css("filter", `blur(${Math.floor(Math.random() * 8) + 2}px)`);
  });
});

$(window).on("load", () => {
  $(".fade-in-container > *").each((i, v) => {
    $(v).css("transition-duration", `${Math.random() + 1}s`, "important");
    $(v).css("transition-delay", `${Math.random() / 1.25}s`, "important");
  });

  $(".fade-in-container > *").addClass("fade-in");
  
  $(window).on("scroll", () => {
    if (inViewport(".fade-in-container")) {
      $(".fade-in-container > *").addClass("fade-in");
    } else {     
      $(".fade-in-container > *").removeClass("fade-in");
    }
  });
});

function inViewport(elem) {
  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();
  let top = $(elem).offset().top
  let bottom = top + $(elem).height();
  
  return (bottom > viewportTop) && (top < viewportBottom);
}

$(window).on("load", () => {
  $(".fade-in-container > *").each((i, v) => {
    $(v).css("transition-duration", `${Math.random() + 1}s`, "important");
    $(v).css("transition-delay", `${Math.random() / 1.25}s`, "important");
  });

  $(".fade-in-container > *").addClass("fade-in");
});
