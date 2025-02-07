
/**
 * @param {object} userData datos del usuario
 */
const userCard = ( userData ) =>{
  const card = `
<div class="col-sm-6 col-md-4 col-lg-3 p-3">
  <div class="card">
    <img src="${userData.avatar}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${userData.first_name} ${userData.last_name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>`;
  return card;
    
};

// exportación nombrada
// export{ userCard };

// exportación por default. Solo se puede exportar un solo elemento

export default userCard;