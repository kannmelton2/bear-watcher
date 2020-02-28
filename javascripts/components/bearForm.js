import util from '../helpers/utils.js'

const buildBearForm = () => {
    let domString = '';
    domString += '<form>';
    domString += '<div class="form-group">';
    domString += '<label for="bearName">Bear\'s Name</label>';
    domString += '<input type="name" class="form-control" id="bear-name" aria-describedby="nameHelp">';
    domString += '</div>';
    domString += '<div class="form-group">';
    domString += '<label for="imageUrl">Image Link</label>';
    domString += '<input type="text" class="form-control" id="bear-photo">';
    domString += '</div>';
    domString += '<button type="submit" class="btn btn-primary">Submit</button>';
    domString += '</form>';
    util.printToDom('bear-form', domString);
};

export default { buildBearForm };