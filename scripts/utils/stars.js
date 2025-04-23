export const renderStars = function (stars) {
  const fullStars = Math.floor(stars); // Gets the whole number part, like 4 from 4.5
  const hasHalfStar = stars % 1 >= 0.5; // Checks if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remainder to make 5

  // console.log(fullStars, hasHalfStar, emptyStars);

  let starIcons = "";

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starIcons += `<i class="fas fa-star"></i>`;
  }

  // Add half star if needed
  if (hasHalfStar) {
    starIcons += `<i class="fas fa-star-half-alt"></i>`;
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starIcons += `<i class="far fa-star"></i>`;
  }

  return starIcons;
};
