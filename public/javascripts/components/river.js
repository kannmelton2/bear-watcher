import util from '../helpers/utils.js';
import bearData from '../helpers/data/bearData.js'

const buildABear = () => {
    const bears = bearData.getBears();
    let domString = '';
    bears.forEach(bear => {
        domString += '<div class="col-md-4 col-lg-4 my-5 mx-3">'
       domString +=     '<div class="card bear-cards">'; 
       domString +=      `<img src="${bear.imageUrl}" class="card-img-top" alt="...">`;
       domString +=      '<div class="card-body">';
       domString +=           `<h5 class="card-title">${bear.name}</h5>`;
       domString +=      '</div>';
       domString +=     '</div>';
       domString += '</div>';
        });
    util.printToDom('bear-container', domString);
};

export default { buildABear };