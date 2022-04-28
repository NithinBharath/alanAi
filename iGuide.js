
intent('hello world', p => {
    p.play('(hello|hi there)');
});
intent('How are you',p=>{
       p.play('I am fine how are you?')
});
intent('I want to go to $(LOC) on $(DATE)', p => {
     p.play(`Wait a second, I will check available flights on ${p.DATE.value} to ${p.LOC.value} for you`);
 });
 intent('Talk to me', p => {
     p.play('Sure, what do you want to talk about?');
 });
 intent('Talk to me', p => {
     p.play('Sure, what do you want to talk about?',
            'Sorry, I am not in the mood to talk to anyone');
 });
 intent('Say $(W hello|goodbye)', p => {
     p.play(`${p.W.value}`);
 });

 intent('Tell me the tourist attractions in Paris', p => {
     p.play('If your new to the city, i would suggest you to visit the Louvre Musuem, the Eiffel tower(I heard its a really good romantic getaway for couples!!)');
 });

 intent('What kind of food do you recommend if i am visiting Mumbai?', p => {
     p.play('Definitely try the vada pav here!!');
 });
intent('Say Good morning in Spanish', p => {
    p.play(voice('es'), 'Buenos dias');
});

intent('Say Good morning in German', p => {
    p.play(voice('de'), 'Guten Morgen');
});
 intent('What is the weather?', p => {
     p.play('The weather is the day-to-day state of the atmosphere');
 });

 intent('Tell me a tourist spot in Vellore', p => {
     p.play('VIT vellore');
 });

 intent('What flights are available to Melborne Australia', p => {
     p.play('Singapore Airlines FL1211, Emirates flight EK651 AND there are many more!!');
 });

 intent('(How is|What is) the weather today?', p => {
     p.play('(It is|Feels) great!');
 });

 let weatherRequests = [
     "(How is|What is) the (weather|temperature) (today|)",
     "today's forecast"
 ];

 let weatherResponses = [
     "(It is|Feels|) (great|awesome)!",
     "Rainy, windy, and cold. (A complete mess!|)"
 ];

 intent(weatherRequests,
     reply(weatherResponses));


 onCreateProject(() => {
     project.movies = {en: "Sergio|Valley Girl|All Day and a Night|The Half of It|No way home"};
 });

 intent('When is $(MOVIE p:movies) on?', p => {
     p.play(`Let me check the showtime for ${p.MOVIE.value} near you`);
 });