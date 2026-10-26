// Curated from the user-supplied YouTube transcript. Times include its introduction.
const mc = [
['What first prompts Mitch to reconnect with Morrie?',['A television interview','A letter from Charlotte','A college reunion notice','A call from his editor'],0,'5:40','Mitch recognizes Morrie on Nightline while talking with Janine.'],
['What does Mitch initially plan his first visit to be?',['An interview for his column','A brief apology and goodbye','A reunion with former classmates','A discussion of a book proposal'],1,'11:33','He describes one quick trip to Boston to say sorry and goodbye.'],
['What does Morrie ask Mitch about his life in Detroit?',['Whether his column pays enough','Whether his readers admire him','Whether he is at peace with himself','Whether he plans to teach again'],2,'15:14','Morrie asks about happiness, community, and being at peace.'],
['Which loss does Mitch connect with giving up music?',['His separation from Janine','His move away from college','His first failure as a pianist','The death of his uncle Mike'],3,'40:31','Mike taught Mitch music, driving, and football; his death affected Mitch’s priorities.'],
['Why does Morrie demonstrate counting on one breath?',['To make limited time tangible','To measure Mitch’s anxiety','To prepare for a radio interview','To teach a meditation exercise'],0,'18:37','His falling count makes the urgency of returning visible to Mitch.'],
['Why does Morrie arrange a living funeral?',['To help his sons plan the service','To hear people’s words while alive','To raise funds for his treatment','To record his final television show'],1,'24:34','He wants to hear the kind things people would otherwise say after his death.'],
['Which description fits Morrie’s response to self-pity?',['He avoids discussing it with Mitch','He treats it as a failure of faith','He feels it, then turns toward his day','He waits for visitors to distract him'],2,'28:50','He describes crying and raging in the morning, then detaching.'],
['What did Tuesdays mean in their earlier college relationship?',['They attended a weekly dance','They worked on the campus paper','They met for department dinners','They met during office hours'],3,'33:24','Tuesday was Morrie’s day for office hours and tutorials.'],
['Why does Mitch bring a recorder?',['He wants to preserve Morrie’s voice','He needs material for his radio show','He wants Janine to judge the lessons','He plans to replace his written notes'],0,'39:06','He wants to remember the conversations and have Morrie’s voice.'],
['How did young Morrie learn that his mother had died?',['His father told him after work','He read the family’s telegram','His stepmother explained it to him','A teacher brought him the news'],1,'42:17','His father could not read English, so Morrie had to read the telegram.'],
['What did Morrie find especially hard to forgive his father for?',['Sending him away to school','Refusing to attend his graduation','Forbidding talk of his mother','Discouraging his marriage to Charlotte'],2,'44:25','His father told him to forget his mother after remarrying.'],
['What does the imagined bird ask Mitch to consider?',['Whether his work will outlast him','Whether his friends will remember him','Whether he has achieved his goals','Whether he is living as he wants'],3,'47:52','The questions concern readiness for death and the life one is leading.'],
['What does Janine say about being a backup singer?',['She need not be number one','She wants Mitch to manage her','She plans to give up performing','She needs a different profession'],0,'1:03:18','Janine says she likes singing of any kind and need not be number one.'],
['What does Janine ask concerning another proposal?',['That Mitch first speak to Charlotte','That Mitch give the ring in person','That they wait until after the funeral','That he choose a different ring'],1,'1:06:35','She responds to the letter and returned ring by asking for an in-person proposal.'],
['Why does Charlotte reassure Mitch about the food he brings?',['Morrie can save it for another day','The visitors depend on his meals','His presence already gives Morrie much','His gifts help Morrie regain strength'],2,'1:08:20','Morrie cannot eat solid food, but Charlotte emphasizes what Mitch himself brings.'],
['What leads Morrie to reject exploitative work?',['His struggle to sell his writing','His disagreement with a professor','His time covering a labor dispute','His experience of his father’s trade'],3,'53:25','The sweatshop and his father’s treatment shape his vow not to degrade people.'],
['Who says, “We die anyway, don’t we?”',['Mitch','Morrie','Janine','Charlotte'],0,'1:24:38','Mitch questions love’s meaning in the face of inevitable loss.'],
['Who says, “You bring him a great deal, Mitch”?',['Connie','Charlotte','Janine','Eva'],1,'1:08:36','Charlotte reassures him when he learns Morrie cannot eat the food.'],
['What does Mitch offer after seeing Aldo treat Morrie?',['To find a different therapist','To ask Walter for medical advice','To learn to provide the treatment','To stop their conversations early'],2,'1:18:04','Mitch asks to learn the physical care rather than remain an observer.'],
['What makes Morrie’s perfect day complete without his saying it?',['A final lecture with students','A visit from his childhood friends','A recording of his favorite music','The presence of his wife and sons'],3,'1:22:39','He says the day could not be perfect without Charlotte and his sons.'],
['Which pair correctly distinguishes two quoted poets?',['Auden: love; Shakespeare: stars','Shakespeare: love; Auden: stars','Auden: ocean; Shakespeare: love','Shakespeare: ocean; Auden: stars'],0,'25:23 / 1:27:12','Morrie names Auden; the funeral’s stars passage is from Romeo and Juliet.'],
['What does Mitch arrange after returning from the islands?',['A weekly television appearance','Tuesdays off to visit Morrie','A joint interview with Ted Koppel','A reunion of Morrie’s old students'],1,'1:20:30','Mitch asks Walter for all his Tuesdays for a while.'],
['Which statement does Mitch make during their last goodbye?',['He now has no fear of death','He will stop recording the lessons','He would trade the lessons for Morrie','He regrets returning after so long'],2,'1:24:08','He would give the lessons back if Morrie did not have to die.'],
['What is Morrie’s response to Mitch’s fear of wasted lessons?',['He should publish their thesis','He should stop asking questions','He must prove himself to Janine','He has already touched Morrie’s life'],3,'1:25:26','Morrie asks Mitch to consider what his return has meant to him.']
];
const ids = [
['Name the interviewer whose program reunites Mitch with Morrie.','Ted Koppel',['Koppel'],'5:40','The interview airs on Nightline.'],
['Name the university where Morrie taught.','Brandeis University',['Brandeis'],'6:11','The television introduction identifies his university.'],
['What subject did Morrie teach?','Sociology',[],'6:11','He is introduced as a retired sociology professor.'],
['What nickname does Mitch use for Morrie?','Coach',[],'18:11','Mitch recalls that he could never call him Professor Schwartz.'],
['Name the illness Morrie has.','ALS',['amyotrophic lateral sclerosis','Lou Gehrig disease','Lou Gehrigs disease','Lou Gehrig’s disease'],'6:05','The interview identifies ALS, also called Lou Gehrig’s disease.'],
['Name Mitch’s girlfriend.','Janine',[],'16:15','Morrie calls hers a beautiful name.'],
['Name Morrie’s wife.','Charlotte',['Charlotte Schwartz'],'30:36','She asks Mitch to call her Charlotte.'],
['Name Mitch’s editor.','Walter',[],'7:03','Walter negotiates deadlines and later time away with Mitch.'],
['Name the caregiver who teaches Mitch to lift Morrie.','Connie',[],'46:48','Mitch asks Connie to show him how to move Morrie.'],
['Name the uncle whose death changed Mitch’s direction.','Mike',['Uncle Mike'],'40:31','Mitch describes him as more like a brother.'],
['Name Morrie’s stepmother.','Eva',[],'54:48','Morrie credits her with what he loves about education.'],
['Name the poet Morrie explicitly credits at his living funeral.','W. H. Auden',['Auden','WH Auden','W H Auden','Wystan Hugh Auden'],'25:23','Morrie calls Auden his favorite poet.'],
['Identify the speaker: “I don’t feel like I have to be number one.”','Janine',[],'1:03:26','She says this while discussing singing backup.'],
['Identify the speaker: “The teaching goes on.”','Mitch',['Mitch Albom'],'1:28:03','This is Mitch’s closing narration.'],
['Complete the line: “Death ends a life, not a ____.”','relationship',[],'1:25:05','Morrie reassures Mitch that their connection endures.'],
['In the wave story, what larger whole does the wave belong to?','The ocean',['ocean'],'1:02:28','The other wave explains that it is part of the ocean.'],
['What day of the week does Morrie die?','Saturday',[],'1:26:37','Mitch says Morrie died on a Saturday morning.'],
['What day of the week is Morrie’s funeral?','Tuesday',[],'1:27:37','Mitch closes the funeral sequence by saying it was Tuesday.']
];
const tf = [
['Mitch has stayed in regular contact with Morrie since graduation.',false,'4:11','He has not seen him for sixteen years and failed his promise to stay in touch.'],
['Morrie says he never feels angry or bitter about his condition.',false,'28:50','He openly describes morning anger, bitterness, and grief.'],
['Morrie describes aging as growth as well as decay.',true,'27:29','He rejects the idea that aging means only decline.'],
['Janine returns the engagement ring Mitch sends with his letter.',true,'1:06:44','Their conversation confirms she gave the ring back.'],
['Morrie’s father could read the telegram announcing his wife’s death.',false,'42:22','Young Morrie reads it because his father cannot read English.'],
['Mitch says he no longer brings his cell phone when visiting Morrie.',true,'50:39','He tells Janine that he wants to be fully present with Morrie.'],
['Morrie says his father’s work encouraged him to enter the same trade.',false,'54:35','That experience instead inspires his vow against work that degrades people.'],
['Janine believes that loving each other is enough to continue their relationship unchanged.',false,'36:58','She says she loves him but needs more than that.'],
['Morrie treats dependence on other people as inherently shameful.',false,'1:10:47','He explicitly denies that dependence is innately shameful.'],
['Mitch repeats the Auden line and tells Morrie he is quoting him.',true,'1:11:30','Mitch says, “No. I’m quoting you.”'],
['Morrie’s perfect day includes swimming and dancing.',true,'1:21:34','He describes a swim, meals, a walk, loved ones, and dancing.'],
['Morrie avoids discussing where he will be buried.',false,'1:22:50','He describes a spot on a hill under a tree with a pond.'],
['Charlotte says Mitch’s visits matter even when Morrie cannot eat his food.',true,'1:08:20','She tells Mitch he brings Morrie a great deal.'],
['Mitch returns to writing after reconciling with Walter.',true,'1:19:53','His narration says he is glad to be writing again.'],
['Morrie says he forgave his father while his father was still alive.',false,'1:14:25','He describes that forgiveness as coming too late.'],
['Morrie’s final answer to loss is that relationships can continue beyond death.',true,'1:25:05','He says death ends a life, not a relationship.'],
['The film ends with Mitch saying that the lessons are finished.',false,'1:28:03','His final words say that the teaching goes on.'],
['The film’s introduction includes Oprah encouraging people to teach and give.',true,'0:30','The teaching-and-giving line belongs to Oprah’s introduction.']
];
const quotations = [
 ['When you learn, teach. When you get, give.','Oprah Winfrey',['Oprah'],'0:30','Oprah says this in the introductory segment, before the story begins.'],
 ['Living unhappily, that’s another matter.','Morrie',['Morrie Schwartz'],'15:06','Morrie contrasts approaching death with living unhappily.'],
 ['Why couldn’t I make one to a dying man?','Mitch',['Mitch Albom'],'11:03','Mitch narrates his difficulty making a personal phone call despite constantly using the phone for work.'],
 ['I can’t just keep going on like this, you know, waiting for you to fit me in.','Janine',[],'21:45','Janine describes what it feels like to keep waiting for Mitch’s attention.'],
 ['There is nothing innately shameful about being dependent.','Morrie',['Morrie Schwartz'],'1:10:47','Morrie challenges the cultural shame surrounding receiving care.'],
 ['I know you love me. And I love you. But I need more than that.','Janine',[],'36:58','Janine explains why affection alone cannot sustain their relationship.'],
 ['You bring him a great deal, Mitch. You bring him so much.','Charlotte',['Charlotte Schwartz'],'1:08:36','Charlotte reassures Mitch when he learns Morrie cannot eat the food he brings.'],
 ['I was wrong, and I’m sorry. Just, uh, tell me how far I have to crawl.','Walter',[],'1:17:29','Walter calls to apologize and discuss Mitch’s return to work.'],
 ['If this wasn’t happening to you…','Mitch',['Mitch Albom'],'1:24:19','Mitch struggles to accept that Morrie must die even though their conversations have helped him.'],
 ['Death ends a life, not a relationship.','Morrie',['Morrie Schwartz'],'1:25:05','Morrie answers Mitch’s grief during their final goodbye.'],
 ['When you give it to me again… I’d like for you to do it in person.','Janine',[],'1:06:51','Janine explains how she wants Mitch to offer the engagement ring again.'],
 ['When I’m dead, you talk, I’ll listen.','Morrie',['Morrie Schwartz'],'1:23:22','Morrie invites Mitch to keep visiting and talking after his death.']
];
const scenes = [
 ['Which event happens first?',['Mitch sees Morrie on Nightline','Mitch attends the living funeral','Mitch brings a tape recorder','Janine sings for Morrie'],0,'5:40','The television interview happens before the reunion, living funeral, recordings, and Janine’s visit.'],
 ['Which event immediately follows Mitch’s heated call with Walter at Morrie’s home?',['He writes a letter to Janine','He learns to lift Morrie','He takes Janine to the islands','He attends Morrie’s funeral'],1,'46:30–47:00','After arguing with Walter, Mitch asks Connie to teach him how to lift Morrie.'],
 ['What is happening when Charlotte says, “You bring him so much”?',['Mitch has just proposed to Janine','Mitch returns after the funeral','Mitch learns Morrie cannot eat solid food','Mitch brings the first tape recorder'],2,'1:08:20','Mitch feels unsure about the food he has brought; Charlotte emphasizes the value of his presence.'],
 ['Which event happens after Janine meets Morrie?',['Mitch first sees the Nightline interview','Morrie holds his living funeral','Mitch first promises to stay in touch','Mitch proposes during an island trip'],3,'1:19:59–1:20:23','Janine’s visit and their discussion of the ring precede the island trip.'],
 ['What prompts Morrie’s story about the little wave during Janine’s visit?',['Mitch asks him to tell the ocean story','Janine asks him about his childhood','Connie turns on a recording of the sea','Charlotte describes his perfect day'],0,'1:01:35','Mitch asks Morrie to tell Janine the ocean story, then keeps joining in.'],
 ['Which sequence matches the film?',['Letter → breakup → visit → proposal','Breakup → letter → visit → proposal','Visit → proposal → breakup → letter','Proposal → visit → letter → breakup'],1,'36:34 / 58:25 / 1:01:11 / 1:20:05','Janine ends the relationship, Mitch writes, she visits Morrie, and the island proposal follows.'],
 ['Which happens between Morrie describing his perfect day and Mitch’s final goodbye?',['The living funeral begins','Janine returns the ring','They discuss his burial spot','Walter offers Mitch his job back'],2,'1:22:50','Morrie describes where he will be buried before their final emotional exchange.'],
 ['What closes the story after the funeral sequence?',['Janine performs another song','Mitch resumes the sports interview','Morrie counts his remaining breaths','Mitch reflects that the teaching continues'],3,'1:27:42–1:28:03','Mitch reflects on special teachers and ends by saying the teaching goes on.']
];
export const questions=[...mc.map((r,i)=>({id:`mc${i+1}`,type:'mc',prompt:r[0],options:r[1],answer:r[1][r[2]],time:r[3],explanation:r[4]})),...ids.map((r,i)=>({id:`id${i+1}`,type:'id',prompt:r[0],answer:r[1],aliases:r[2],time:r[3],explanation:r[4]})),...tf.map((r,i)=>({id:`tf${i+1}`,type:'tf',prompt:r[0],options:['True','False'],answer:r[1]?'True':'False',time:r[2],explanation:r[3]})),...quotations.map((r,i)=>({id:`who${i+1}`,type:'id',tags:['who'],quote:r[0],prompt:`Who says: “${r[0]}”`,answer:r[1],aliases:r[2],time:r[3],explanation:r[4]})),...scenes.map((r,i)=>({id:`scene${i+1}`,type:'mc',tags:['scenes'],prompt:r[0],options:r[1],answer:r[1][r[2]],time:r[3],explanation:r[4]}))];
// Tags curate dedicated modes without duplicating the same question in the full bank.
for (const q of questions) {
 if(['mc17','mc18','id13','id14'].includes(q.id)) q.tags=[...(q.tags||[]),'who'];
 if(['mc1','mc2','mc4','mc6','mc8','mc9','mc10','mc11','mc14','mc19','mc20','mc22','mc23','mc24','id16','id17','id18'].includes(q.id)) q.tags=[...(q.tags||[]),'scenes'];
}
export function poolFor(mode,history={}) {
 if(mode==='all'||mode==='quick')return [...questions];
 if(mode==='missed')return questions.filter(q=>history[q.id]&&!history[q.id].correct);
 if(mode==='who'||mode==='scenes')return questions.filter(q=>q.tags?.includes(mode));
 return questions.filter(q=>q.type===mode);
}
export function selectQuestions(mode,count,random=true,history={}) {
 const pool=poolFor(mode,history);
 if(mode==='quick') {
   // Guarantee all three formats in every quick round, rather than relying on chance.
   return shuffle(['mc','id','tf'].flatMap((type,i)=>shuffle(pool.filter(q=>q.type===type)).slice(0,i===0?4:3)));
 }
 return (random?shuffle(pool):pool).slice(0,count);
}
export const normalize=s=>String(s).toLowerCase().normalize('NFKD').replace(/[’']/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
export const isCorrect=(q,value)=>[q.answer,...(q.aliases||[])].some(a=>normalize(a)===normalize(value));
export function shuffle(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
