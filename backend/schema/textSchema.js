const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
    text: {
        type: String,
        required: true
    }
});

const Text = mongoose.model('Text', textSchema);

module.exports = Text;

// Yukarıda satırdan satıra ne yaptık?

// 1. İlk olarak mongoose paketini projemize dahil ettik.
// 2. Schema adında bir değişken oluşturduk ve bu değişkenin değeri mongoose.Schema oldu.
// 3. textSchema adında bir değişken oluşturduk ve bu değişkenin değeri bir obje oldu.
// 4. textSchema objesinin içerisinde text adında bir obje oluşturduk.
// 5. Bu objenin type değeri String oldu ve required değeri true oldu.
// 6. Text adında bir model oluşturduk ve bu modelin değeri mongoose.model('Text', textSchema) oldu.
// 7. Text modelini dışa aktardık.