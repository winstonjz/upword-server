x(`http://www.thesaurus.com/browse/best?s=t`, {
    partOfSpeech: '.synonym-description .txt',
    description: '.ttl'
})(function(error, word){
    word.word = req.body.word;
    console.log(word);
    x('http://www.thesaurus.com/browse/hello?s=t', ['.relevancy-list ul li a .text'])(function(
        e, syns){
            console.log(syns);
            // var synSchemas = [];
            // for (let i = syns.length-1; i >= 0; i--) {
            //     x('http://www.dictionary.com/browse/any?s=t', {
            //         partOfSpeech: '.luna-data-header .dbox-pg span span'
            //     })(function(er, synData){
            //         console.log(synData, "SYNDATA");
            //     })
            // }
        })
    })