/**
 * Построитель объекта IsStartsWithValidator.
 *
 * @constructor
 */
function IsStartsWithValidatorBuilder() {
}

IsStartsWithValidatorBuilder.prototype = {

    /**
     * Осуществляет построение объекта проверки данных.
     *
     * @public
     * @param {*} meta Метаданные объекта проверки данных.
     * @param {*} factory Фабрика для построения объектов проверки данных.
     */
    build: function (meta, factory) {
        var result = new IsStartsWithValidator();
        result.message = meta.Message;
        result.property = meta.Property;
        result.value = meta.Value;
        return result;
    }
};