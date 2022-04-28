// Use this sample to create your own voice commands
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

intent('Say Good morning in Spanish', p => {
    p.play(voice('es'), 'Buenos dias');
});

intent('Say Good morning in German', p => {
    p.play(voice('de'), 'Guten Morgen');
});
 intent('What is the weather?', p => {
     p.play('The weather is the day-to-day state of the atmosphere');
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