import util from '../helpers/utils.js'
import bearData from '../helpers/data/bearData.js'
import river from '../components/river.js'


const addNewBear = (e) => {
    e.preventDefault();
    const bears = bearData.getBears();
    const brandNewBear =
        {
            id: `bear${bears.length + 1}`,
            name: $('#bear-name').val(),
            imageUrl: $('#bear-photo').val()
        }
    bearData.getBears().push(brandNewBear);
    $('#new-bear-form').trigger('reset');
    river.buildABear();
};

const buildBearForm = () => {
    let domString = '<h2>Add New Bear</h2>';
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
    $('#submit-new-bear').click(addNewBear);
};

export default { buildBearForm };