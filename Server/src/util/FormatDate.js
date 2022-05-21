

const FormataData = (dataNascimento) => {

    try {
        const dataFormatada = new Date(dataNascimento);
        console.log(isNaN(dataFormatada));
        if (isNaN(dataFormatada)) {
            throw ' data formato invalido. ';
        }
        return dataFormatada;
    } catch (error) {
        return new Error(error);
    }

};

module.exports = {
    FormataData
};