import util from '../helpers/utils.js'
import bearData from '../helpers/data/bearData.js'


const addNewBear = (e) => {
    e.preventDefault();
    const bears = bearData.getBears();
    const brandNewBear =
        {
            id: `bear${bears.length + 1}`,
            name: document.getElementById('bear-name').value,
            imageUrl: document.getElementById('bear-photo').value
        }
    bearData.getBears().push(brandNewBear);
    document.getElementById('new-bear-form').reset();
    console.log(brandNewBear);
};

const buildBearForm = () => {
    let domString = '';
    domString += '<form id="new-bear-form">';
    domString += '<div class="form-group">';
    domString += '<label for="bearName">Bear\'s Name</label>';
    domString += '<input type="name" class="form-control" id="bear-name" aria-describedby="nameHelp">';
    domString += '</div>';
    domString += '<div class="form-group">';
    domString += '<label for="imageUrl">Link to Bear\'s Photo</label>';
    domString += '<input type="text" class="form-control" id="bear-photo">';
    domString += '</div>';
    domString += '<button type="submit" class="btn btn-primary" id="submit-new-bear">Submit</button>';
    domString += '</form>';
    util.printToDom('bear-form', domString);
    document.getElementById('submit-new-bear').addEventListener('click', addNewBear);
};

export default { buildBearForm };