import Vue from "vue";
import { MLInstaller, MLCreate, MLanguage } from "vue-multilanguage";

Vue.use(MLInstaller);

export default new MLCreate({
  initial: "english",
  save: process.env.NODE_ENV === "production",
  languages: [
    new MLanguage("english").create({
      alfa: "Alpha version",
      p1GetMore: "Learn more",
      header1: "Home",
      header2: "Idea",
      header3: "About Us",
      header4: "FAQ",
      header5: "Contacts",
      register: "Sign up",
      logIn: "Log in",
      p2Button: "Next",
      p2s1Title: "Registration",
      p2s1Text:
        'Any serious club has its own members. Ask yourself: "How do I get to the club?". It’s easy. Just click on the registration button and a form will be opened for you to fill out the necessary information.',
      p2s2Title: "Club-pass activation",
      p2s2Text:
        "When the registration is done, you receive access to your personal club account. Get acquainted with the rules and activate the account so that you will be able to make in-game contributions.",
      p2s3Title: "Find a match",
      p2s3Text:
        "In your personal account, you can create or find a ready-made game by following certain conditions for participation. If the waiting period seems long, the club will always notify you of upcoming games.",
      p2s4Title: "Claim your reward",
      p2s4Text: "Any worthy victory is rewarded. May the best win!",
      p3Text1:
        "Being a Dota player, I have always dreamed of getting into the ranks of the best, having the opportunity to spend these stressful 50 minutes with the professionals always trying to win against them, maybe even find new friends and later - teammates. But there is no easy way in this world. Our club welcomes everyone who deserves it to find a better place, where you can taste the price of victory and defeat, being able to prove themselves fully by showing an exceptional performance. You need to do your best because the question of high reward is at stake. Having experienced the taste of sweetness of victory and the bitterness of defeat at Darewin's Club, you will know your worth.",
      p3Text2:
        "I could tell you how cool and wonderful we are. But this is not in my interests. After all, we are more than just a club. We are rather a community that is not for everyone. Or rather - for anyone who is ready to fight and win. This is what characterizes the Darewin’s Club. Now ask yourself a question - are you ready?",
      p4q1: "What is this?",
      p4q2:
        "I’ve heard something like that before. Do you think you’re better?",
      p4q3: "Just a second, I should transfer money to you?",
      p4q4: "I have no money. Or do I look like Bill Gates?",
      p4q5: "Looks like a scam, right?",
      p4q6: "What is your benefit then?",
      p4q7: "And what games are now available in the club?",
      p4q8:
        "Clear. When is the alpha version? I don’t really want to waste my time beta testing the “super duper” project ...",
      p4q9:
        "Okay. Even if I transfer funds to my club account, how can I withdraw them back, not to mention the prize money?",
      p4q10:
        "I see this is the last point, but I did not find the answer to my question. Who will help me?",
      p4t1:
        "First of all, we are an e-sports club. Or, to put it simply, we are the place where you can realize your competitive ambitions and get rewards for your efforts.",
      p4t2:
        "We are not better. We are different. The club’s activities are not related to bookmaking, they don’t sell “gear” here, we don’t give free spins, and moreover we don’t offer you purchasing analytics to take your game to a “radically new level”. A club pass gives you the opportunity to participate in games and receive up to 100% (and in exceptional cases more) of the contribution to the game. In fact - you play to win.",
      p4t3:
        "The problem with absolutely all modern games, which can be called e-sports or, in other words, competitive, is that ordinary players do not appreciate the game itself or the time spent in it. Only a few become athletes and receive a salary. And the rest have to be content with boosters, smurfs, gameruiners and just rude players. All of them discourage the interest in the game from the average user. The only way to resolve this issue is to make the player take the game more seriously. Accordingly, money is an integral material component for club games.",
      p4t4:
        "We are a serious project. And that is why we decided to do everything step by step. Now the site and club games are in beta testing. Absolutely all game contributions will be equal to 1 ducat (DWD), which in turn is equal to 1 American dollar (USD). A small fee for significant privileges, agreed?",
      p4t5:
        "Fortunately, not. We are a registered company and conduct our activities in accordance with established legislation. Moreover, for the period of beta testing, our company will not charge a fee for the games held from the participants.",
      p4t6:
        "Our benefit is that we are guaranteed to create an e-sports community that will be taking the game process more serious. To remove the commission for the beta testing period for us is more than a sure step forward.",
      p4t7:
        "Only one game is available for beta testing - Dota2. Solo or team mode - the choice is yours. But the rules will be like in competitions to force players try to make the right decisions - Captains mode, Bo1.",
      p4t8:
        'We respect your precious time. Therefore, we want to say that the alpha version will be launched as soon as there is the necessary amount of daytime games to maintain the competitive spirit within the club. In the alpha version will be available a large number of games and many different "features and buns." And beta test participants will receive a reward for their efforts when the project moves to the alpha version.',
      p4t9:
        "In our club there are different ways of transferring funds. Choose the one that suits you personally. All methods are absolutely safe and guarantee you the safety of data when transferring funds. Please draw your attention to the fact that the commission may be charged by your bank or payment system for the transfer of funds and / or internal currency conversion.",
      p4t10:
        "Our club has support for members. We answer smart (and not so) questions, observe honest (and not so) players, and also, we solve obvious (and not so) disputes so that participants know that games at Darewin's Club are always Fair Play. May the best win.",
      ask: "Ask a Question",
      phone: "Phone",
      post: "Post",
      adres: "Address",
      userCab: "Personal area",
      usePol: "Terms of use",
      confPol: "Privacy policy",
      AMLPol: "AML Policy",
      map: "Site Map",
      pp: "Terms & conditions Darewin’s club",
      emailAdres: "Your email address",
      youQ: "your question",
      readyAcc: "Already have an account?",
      logggin: "Log in.",
      emailAdress2: "E-mail address",
      login: "Login",
      password: "Password",
      cPassword: "Confirm password",
      promo: "Promocode",
      toRegist: "Register",
      iAgree: "I agree with",
      polCofid: "Privacy Policy",
      forgotPass: "Forgot your password?",
      enter: "Entrance",
      noAcc: "No account?",
      createHere: "Create it here.",
      forgotPassw: "Password recovery",
      forgotPassT: "Enter the email address to reset your password.",
      dropPassword: "Reset the password",
      wPass: "Write a new password.",
      ready: "Done!",
      readyT: "Password saved, now you can login with a new password.",
      confirm: "Confirm",
      firstCitTitle: '"A faithful heart will always find a worthy reward."',
      firstCitAutor: "Masutatsu Oyama",
      firstCitText:
        "Honoring the traditions and unspoken rules of societies has long been considered an integral part of a gentleman's club. In classic 19th-century London, the popularity of such communities gained extraordinary heights, where from simple caffeines and tea establishments the premises turned into places whose regulars, possessing completely different professions, material conditions and inner convictions, always found common values. Continuing the legacy of such clubs, we at Darewin’s Club also want to encourage our like-minded people who are pioneers of the club in such a difficult time. For our part, the Club provides an opportunity to take part in “clean” games, which means that the Club will not charge a fee for matches. This opportunity will be valid until the required number of games of the daily norm is gained to maintain a competitive spirit within the club. In this way we want to support the idea and culture of the traditions of the clubs of bygone days in the era of cyber-sports disciplines.",
      secondCitTitle:
        "We do not make friends by the fact that we receive services from them, but by the fact that we ourselves provide them.",
      secondCitAutor: "Thucydides",
      secondCitText:
        "No matter how the new place is strange or suspicious, enticing or frightening, dangerous and unpleasant - such a test is much easier to transfer with a friend. Fidelity, loyalty and compassion are integral qualities of true friendship, where the upcoming difficulties and obstacles overshadow the path to solidarity and strong support of your comrade. It will be an honor for our club to be a place where the value of morality and the strength of the spirit of support are welcomed among the participants. Therefore, we will do our best to develop and support this desire. As a first step, our Club creates an incentive program. Invite your friend through a unique code in your profile and by the beginning of the beta version of the project you will receive a monetary reward for the activity of your friends.",
      LoyalProg: "Loyalty programs",
      sup: "Support",
      writeSup: "Write to support",
      supBut: "Apply",
      q1: " How do I start playing?",
      q2: " There was a ruiner in my team, what should I do?",
      q3: " How do I withdraw money and are there any limits?",
      q4: " How do I play with my friend?",
      q5: " Why are strong opponents against me?",
      q6: " I forgot my password, what should I do?",
      q7: " I won the game, but the game results were canceled. Why?",
      a1:
        'In order to start your first game, your balance must be at least 1 DWD (Darewin’s Dollar). You can purchase DWD in the Funds section. Next, click the "Find a Game" button or go to the "Games" section and select the "Current Matches" subsection. If there are no seats in accessible lobbies, then the platform will automatically create a lobby and enroll you in the upcoming match. Good luck!',
      a2:
        'Our project is primarily aimed at creating a decent and faithful sports-gaming community, so we strongly encourage the fight against "pests". If you are sure that there was a ruiner / cheater in your team or opposing team, you need to file a complaint. You can file a complaint immediately after the game in the "Games" section. To do this, you need to go to the “Last Matches” subsection, find the game and click the “File a Complaint” button. For a better and faster reaction to your appeal, please indicate the user’s nickname, problem and approximate time of the incident within the game process. We will definitely take a closer look and solve your question.',
      a3:
        'To withdraw your funds you need to go to the "Funds" section, select the "Withdraw funds" subsection, decide on the withdrawal amount and payment system, and then click the "Withdraw" button. You will be transferred to the page of the payment system, where you can finally complete the withdrawal process. Please note that transaction limits can be set by the payment system itself. From our side, there is only one requirement - your balance should not be less than or equal to 0.',
      a4:
        'In order to play with your friend, you must first invite him to become a member of the club. Send him a unique promo code, which is in your profile, and as soon as he signs up, add him to your friends on the platform. To do this, go to the "Friends" section, in the search bar enter his nickname on the site and click the "Add Friend" button. Then you can add him to the game party. But keep in mind that in order to play team format matches, you need to have a team of five. Otherwise, you will only play solo format with Team Balance mode.',
      a5:
        "Both in real life and in our club, the game itself is a competitive process in which participants fight for the right to be the best in the match. You must understand that you will not always dominate, as there are a lot of opponents and they all want to win. Therefore, we recommend that you approach the games with full responsibility and a clear understanding of all the elements within the game process. In the near future, a clear skill bracket matchmaking system will be created, which will be divided into player divisions so that weak players feel comfortable at the level of their game and equal opponents.",
      a6:
        'Before you try to recover your password, try remembering it. Often, users create a password using a certain algorithm or an already used password. If you are unable to remember the password, you can try to look for it in the saved browser passwords. If you do not save passwords, then one option remains for you - password recovery by resetting it. Go to the "Profile" section or, when entering the site, click the "Forgot Password" button. The system will offer you to go through a step-by-step procedure for password recovery. Be sure to enter the correct password recovery email. Do not tell anyone the information to enter your mail, as well as the information to enter the club’s website.',
      a7:
        "Our club has a clear match analysis system and a competent support service algorithm. If the result of the match in which you participated was canceled, then this could happen for several reasons, for example, your victory was not worthy, because the opposing team had a ruiner, either a cheater was present in the game, or players from different teams were caught in teaming to disrupt the match. In short, if you played honestly and did not violate the rules of the club, in any case your time spent and efforts will be compensated in monetary terms, and violators will be punished.",
      pQ: "Top Questions",
      tayQ: "Tell us about the problem.",
      money: "Transactions",
      frend: "Friends",
      prof: "Profile",
      pravil: "Rules",
      game: "Games",
      redy: "Ready",
      getComand: "Assemble a team",
      findG: "Find a game",
      online: "Online",
      LogOut: "Log Out",
      pravSog: "Legal agreement",
      trans: "Deposits",
      vuv: "Withdrawals",
      balans: "Balance",
      transMet: "Choose a transfer method",
      transBut: "Transfer ",
      trPh: "Transfer amount",
      sum: "Amount",
      num: "Number",
      type: "Type",
      dateTime: "Date and time",
      win: "Win",
      search: "Find",
      last: "Recent",
      changePhoto: "Change photo",
      aboutYou: "About myself",
      change: "Edit",
      cont: "Contacts",
      sec: "Safety",
      refLink: "Referral link",
      lang: "Language",
      now: "active now",
      changePass: "Change password",
      solo: "Solo",
      party: "Party",
      match1: "Past matches",
      match2: "Upcoming Matches",
      match3: "Active matches",
      players: "Players",
      matchNum: "Match number",
      enterMatch: "Enter the match",
      playing: "Already playing",
      gamerName: "Player name",
      addEnterMoney: "Deposit/Withdraw funds",
      tellAbout: "Report Abuse",
      else: "Other",
      enterMoney: "Withdraw",
      cancel: "Refuse",
      minut: "minutes",
      gameStart: "Beginning of the game",
      regEnd: "End of the registration",
      matchType: "Match type",
      result: "Result",
      sendRep: "Make a complaint",
      topic: "Topic",
      AddTooFriends: "Friend request from",
      AddTooParty: "Party request from",
      notAcceptFriend: "declined the friend invitation",
      AcceptFriend: "accepted a friend invitation",
      AcceptLobby: "accepted the invitation to the group",
      notAcceptParty: "declined the invitation to the group",
      LobbyDestroed: "Lobby dissolved",
      accept: "Accept",
      cancel: "Reject",
      len: "Languages",
      apply: "Apply",
      chat: "Global chat",
      brothersF: "Brothers F.",
      notLider: "You are not a party leader",
      notReady: "Not ready",
      chatBtn: "Chat",
      chatPlaceholder: "Your message",
      rule11:
        "1.Darewin's Club is a closed-type club, in order to join which you need to undergo mandatory registration and personal identification. Identity requirements can be expanded according to AML and FFT policy rules and regulations.",
      rule21:
        "2. To register, you must specify a valid email address and confirm its validity. Email, as well as a unique nickname, remains unchanged and is assigned to the club user on a permanent basis.",
      rule31:
        "3. The club reserves the right to make amendments and changes to the club rules. Club members will be notified of such changes by email.",
      rule41:
        "4. The club has full right and authority in the matter of acceptance / exclusion / temporary restriction of access to the member (s) of the club. The decision is considered on an individual basis and is made by the administration of the club.",
      rule51:
        "5. All club members are obliged to follow the rules of the Darewin's Club. Failure to comply with the rules entails penalties such as material punishment, temporary restriction of access, exclusion without the right to pardon.",
      rule61:
        "6. Only the administration of the club has the right to a final decision in a dispute between club members or when passing verdicts regarding the results of matches, user behavior, cases of fraud, etc.",
      rule71:
        "7. Any member of the club has the right to contact the administration of the club directly to resolve his issue.",
      rule81:
        "8. If questions / conflicts / disputes are not resolved between the members of the club on their own, each of the parties of the issue / conflict / disputed point has all rights to contact the administration for assistance in resolving the issue / conflict / disputed point. In this case, the administration takes full responsibility for passing the verdict. The term for rendering a verdict should not exceed 48 hours from the date of appeal on a specific case. In rare cases, the administration will need more time to make a decision, about which the parties of the issue / conflict / dispute will be notified.",
      rule91:
        "9. All club games are in alpha testing, which means the Darewin's Club at an early stage of development allows its users to hold competitions only in the discipline of Dota2 within the framework of specific rules for conducting matches in Darewin's Club.",
      rule12:
        "10. Advertising of any format is prohibited in Darewin's Club, except for those cases when it is agreed with the administration.",
      rule22:
        "11. In Darewin's Club there are no clear rules of conduct and limits of decency, however, each member of the club must respect the other members of the club, treat them with the proper level of decency and mutual understanding.",
      rule32:
        "12. If the words / actions of one Darewin’s Club member offend or humiliate feelings, thoughts, etc. other participant, then the conflict situation must be resolved between the club members. If this action is impossible, the injured party has every right to contact the administration with its complaint. In the development of such a scenario, penalties can range from a public apology to material punishment. Extreme measures will be expulsion from the club with complete deprivation of funds and the right to pardon.",
      rule42:
        "13. Flooding, spam, cyberbullying, links to unverified sources, obscene language, publication of deliberately false information, extortion, etc. are prohibited in the general Darewin's Club chat. In case of violation of this rule, a club member may receive a temporary ban.",
      rule13:
        "14. All games are played according to the rule Bo1, Captains mode, team balance / shuffle players..",
      rule23:
        "15. Understaffed teams (less than 5 players) participate in Solo games.",
      rule33:
        "16. Game lobby timer on the site - 10 minutes. If the lobby on the site is not completed within 10 minutes, it is automatically destroyed, contributions are returned to the participants.",
      rule43: "17. Lobby timer in the game itself - 5 minutes.",
      rule53:
        "18. If a user has left the lobby on a site in which he is already registered, he receives a penalty of 50% of the contribution.",
      rule63:
        "19. If the user has not connected to the lobby in the game, in which he is already registered, he receives a penalty of 100% of the contribution. The game is canceled. Compensation is paid to the rest of the players.",
      rule73:
        "20. The captain can be determined in several ways: by the free will and consent of the players in the team, through the -roll command (the player with the highest value becomes the captain), or the player with the highest rating.",
      rule83:
        "21. If a player of one of the teams leaves the game (Leave), the game continues. If a team with 5 people wins, they will receive a standard prize fund. If the outnumbered team wins, they will receive an increased prize pool.",
      rule93:
        "22. If a player during the game will harm the game process, use cheats, be afk, break in-game artifacts and influence the game process in every possible way to ruin his team’s game, then according to the results of the game, the player may lose the game fee, and the results of the game are canceled.",
      rule103:
        "23. Each team has 3 pauses, totaling 7 minutes. If a player does not return to the game after 7 minutes, then he has 5 minutes left inside the game time (standard time dictated by Valve's terms). If the player does not return after the next 5 minutes after the pause, then he will be awarded a technical defeat.",
      rule113:
        "24. The duration of the pauses must be recorded by the means at hand of the captains of both teams. When appealing a premature spin of a pause, an error of 10 seconds will be taken into account.",
      rule123:
        "25. In case of abuse of pauses at an important moment (smoke, an upcoming kill, after killing an enemy and other important situations) or pressing pauses without the opponent's readiness, the player who broke the rule is awarded a technical defeat if such an incident occurs.",
      rule133:
        "26. Victory is awarded to the team that destroyed the enemy's main structure (Throne).",
      rule14:
        "27. All games are played according to the Bo1, Captains mode rule.",
      rule24:
        "28. Fully staffed teams (full 5 people) participate in Party format games.",
      rule34:
        "29. Timer of the lobby of the game on the site - 10 minutes. If the lobby on the site is not completed within 10 minutes, it is automatically destroyed, contributions are returned to the participants.",
      rule44: "30. Lobby timer in the game itself - 5 minutes.",
      rule54:
        "31. If a team member leaves the lobby on a site in which he is already registered, the whole team leaves the lobby and receives a penalty of 50% of the contribution.",
      rule64:
        "32. If the user does not connect to the lobby in the game, in which he is already registered, the whole team receives a penalty of 100% of the contribution. The game is canceled. Compensation is paid to the other team.",
      rule74:
        "33. If a player of one of the teams leaves the game (Leave), the game continues.",
      rule84:
        "34. If a player of one of the teams during the game will harm the game process, use cheats and manipulations with third-party software that gives an advantage to his team, then according to the results of the game, his entire team loses the game fee, and the results of the game are canceled.",
      rule94:
        "35. Each team has 3 pauses, totaling 7 minutes. If a player does not return to the game after 7 minutes, then he has 5 minutes left inside the game time (standard time dictated by Valve's terms). If the player does not return after the next 5 minutes after the pause, then he will be awarded a technical defeat.",
      rule104:
        "36. The duration of the pauses must be recorded by means of the captains of both teams. When appealing a premature spin of a pause, an error of 10 seconds will be taken into account.",
      rule114:
        "37. In case of abuse of pauses at an important moment (smoke, upcoming kill, after killing the enemy and other important situations) or pressing pauses without the opponent's readiness, the team of the player who violated this rule is awarded a technical defeat in the event of such an incident.",
      rule124:
        "38. Victory is awarded to the team that destroyed the enemy's main structure (Throne).",
      pgr: "Party format game rules",
      sgr: "Solo Games Rules",
      br: "Behavior rules",
      gr: "General rules",
      t1:
        "This is your status. When it is active, you can search for a game and receive notifications from our club",
      t2:
        "This button will take you to a section where you can add friends to the team to play",
      t3:
        "This button will create a lobby for you if there are no other active lobbies. If you are playing  5-men, then the lobby will be created for the team",
      t4:
        "Here you can find a game, view match history or join an active lobby",
      t5: "Game mode for solo players only or incomplete squads",
      t6: "Game mode for full team games only",
      t7:
        "Here you can view match history, see a link to Dotabuff, or file a player complaint",
      t8:
        "Here you can find information about available lobbies and ongoing matches",
      t9:
        "Here you can find information about a match in which you are already participating",
      t10: "Here you can read and accept the rules of our club",
      t11:
        "Here you can find personal information, linking your Steam account and a link to the referral program",
      t12:
        "Here is a list of your friends and recent players, global chat and the ability to form a team",
      t13:
        "Here you can purchase in-club currency, as well as withdraw it into real money using available methods",
      t14:
        "This is a section of active loyalty programs for which club members will receive rewards",
      t15:
        "Here you can contact the administration and get answers to frequently asked questions",
      tutorialSkip: "Skip",
      deletePhoto: "Delete photo",
      partyInviteSendet: "Шnvitation has been sent",
      noMoney: "Insufficient funds to start the game.Please top up your wallet",
      acceptLobbyInvite: "Join",
    }),

    new MLanguage("russian").create({
      alfa: "Альфа версия",
      p1GetMore: "Узнать больше",
      header1: "Главная",
      header2: "Принцип",
      header3: "О нас",
      header4: "FAQ",
      header5: "Контакты",
      register: "Регистрация",
      logIn: "Войти",
      p2Button: "Далее",
      p2s1Title: "Регистрация",
      p2s1Text:
        'В любом клубе есть участники. Задайтесь вопросом: "как попасть в клуб?". Очень просто. Нажав на кнопку регистрации, вам будет открыт бланк для заполнения нужной информации',
      p2s2Title: "Активация клубного пропуска",
      p2s2Text:
        "Завершив регистрацию, вы получаете доступ к своему личному кабинету. В этом разделе вы сможете ознакомиться с правилами клуба и активировать счет, чтобы у вас была возможность делать игровые взносы.",
      p2s3Title: "Поиск игры",
      p2s3Text:
        "В вашем личном кабинете вы сможете создать или найти уже готовую игру, выполнив определённые условия участия. Если период ожидания покажется вам долгим, то клуб всегда оповестит вас о предстоящих играх.",
      p2s4Title: "Забери свой приз",
      p2s4Text:
        "Любая достойная победа вознаграждается. Пускай победит сильнейший",
      p3Text1:
        'Будучи игроком в "DotA" я всегда мечтал попасть в ряды лучших, иметь возможность провести эти напряженные 50 минут с профессионалами своего дела и, кончено же, побеждать, может быть, даже найти товарищей и в дальнейшем напарников по команде. Но увы, по определённым причинам это не так просто. В нашем клубе есть место каждому, кто достоин этого, где узнав цену победы и поражения, любой сможет проявить себя в полной мере, показывая исключительную игру, ибо на кону стоит вопрос денежного вознаграждения, и быть уверенным в том, что это было не напрасно. Испытав на себе вкус сладости победы и горечи поражения в Darewin\'s Club ты узнаешь себе цену.',
      p3Text2:
        "Я мог бы рассказать, какие мы классные и замечательные. Но это не в моих интересах. Ведь мы – нечто большее, чем просто клуб. Мы скорей сообщество, которое подходит далеко не каждому. А точнее – каждому, кто готов бороться и побеждать. Именно это и характеризует Darewin’s Club. Теперь задайте себе вопрос – вы готовы?",
      p4q1: "Что это такое?",
      p4q2: "Я уже где-то такое слышал, и чем вы лучше?",
      p4q3: "Секунду, я что должен перевести деньги?",
      p4q4: "У меня нет денег. Или я похож на Била Гейтса",
      p4q5: "Очень похоже на кидалово, не так ли?",
      p4q6: "В чем ваша выгода?",
      p4q7: "А какие игры сейчас доступны в клубе?",
      p4q8:
        'Ясно. Когда бета-версия? Не очень хочу тратить своё время на альфа-тестирование "супер-пупер" проекта...',
      p4q9:
        "Ладно. Даже если я переведу средства на свой клубный счёт, то как мне забрать их обратно, не говоря уже о призовых?",
      p4q10:
        "Вижу это уже последний пункт, но я не нашёл ответа на свой вопрос. Кто мне поможет?",
      p4t1:
        "В первую очередь – мы киберспортивный клуб. Или, проще говоря, мы то место, где вы сможете реализовать свои соревновательные амбиции и получить вознаграждение за свои старания.",
      p4t2:
        "Мы не лучше. Мы – другие. Деятельность клуба не связана с букмекингом, здесь не торгуют “шмотом”, мы не дарим бесплатные спины, и тем более не предлагаем вам купить аналитику, чтобы вывести вашу игру “на кардинально новый уровень”. Клубный пропуск даёт вам возможность принимать участие в играх и получать до 100% (а в исключительных случаях и больше) от взноса в игру. По факту – Вы играете на победу.",
      p4t3:
        "Проблема абсолютно всех современных игр, которые можно назвать киберспортивными или по другому – соревновательными в том, что обычные игроки не ценят саму игру или время проведённое в ней. Только единицы становятся спортсменами и получают гонорар. А остальным приходится довольствоваться бустерами, смурфами, геймруинерами и просто анманерами. Все они отбивают интерес к игре у обычного пользователя. Единственный способ решить этот вопрос – заставить игрока относиться серьезнее к процессу игры. Соответсвенно, деньги являются неотъемлемой материальной составляющей для клубных игр.",
      p4t4:
        "Мы являемся серьезным проектом. И поэтому решили делать все поэтапно. Сейчас сайт и клубные игры находятся в альфа-тестировании. Абсолютно все игровые взносы будут равны 1 дукату (DWD), который равен в свою очередь 1 американскому доллару (USD). Небольшая плата за весомые привелегии, согласны?",
      p4t5:
        "К счастью – не так. Мы являемся зарегистрированной компанией и ведём свою деятельность согласно установленным нормам законодательства. Более того, на период альфа-тестирования наша компания не будет взымать с участников комиссию за проведённые игры.",
      p4t6:
        "Наша выгода заключается в том, что мы гарантированно создадим киберспортивное общество, которое будет серьезнее относится к процессу игр. Убрать комиссию на период альфа-тестирования – более чем верный шаг.",
      p4t7:
        "На период бета-тестирования доступна только одна игра – Dota2. Соло или командный режим – выбор за вами. Но правила будут как на соревнованиях, чтобы заставить игроков стараться принимать правильные решения – Captains mode, Bo1.",
      p4t8:
        'Мы уважаем ваше драгоценное время. Поэтому хотим сказать, что бета-версия будет запущена, как только будет необходимый объём дневных игр для поддержания соревновательного духа внутри клуба. В бета-версии будет доступно большое количество игр и множество разных "фич и плюшек". Ну а участники альфа-тестирования получат вознаграждение за свои старания, когда проект перейдёт в бета-версию.',
      p4t9:
        "В нашем клубе доступны разные способы перевода средств. Выберите себе тот, который подходит лично вам. Все способы абсолютно безопасны и гарантируют вам сохранность данных при переводе средств. Просим обратить ваше внимание на то, что комиссия может взыматься вашим банком или платежной системой за перевод средств и/или внутреннюю конвертацию валюты.",
      p4t10:
        "В нашем клубе работает поддержка участников. Мы отвечаем на умные (и не очень) вопросы, наблюдаем за честными (и не очень) игроками, а также, решаем очевидные (и не очень) споры, чтобы участники знали, что игры в Darewin's Club всегда Fair Play. Пусть вам улыбается фортуна.",
      ask: "Задать вопрос",
      phone: "Телефон",
      post: "Почта",
      adres: "Адрес",
      userCab: "Личный кабинет",
      usePol: "Условия использования",
      confPol: "Политика конфиденциальности",
      AMLPol: "Политика AML",
      map: "Карта сайта",
      pp: "Положения и правила Darewin’s club",
      emailAdres: "адрес вашей электронной почты",
      youQ: "ваш вопрос",
      readyAcc: "У вас уже есть аккаунт?",
      logggin: "Войдите.",
      emailAdress2: "Адрес электронной почты",
      login: "Логин",
      password: "Пароль",
      cPassword: "Повторите пароль",
      promo: "Промокод",
      toRegist: "Зрегистрировать",
      iAgree: "Я согласен c",
      polCofid: "Политикой конфиденциальности",
      forgotPass: "Забыли пароль?",
      enter: "Вход",
      noAcc: "Нет аккаунта?",
      createHere: " Создайте его здесь.",
      forgotPassw: "Восстановление пароля",
      forgotPassT: "Введите адрес почты для сброса пароля.",
      dropPassword: "Сбросить пароль",
      wPass: "Напишите новый пароль.",
      ready: "Готово!",
      readyT: "Пароль сохранен, теперь вы можете войти с новым паролем.",
      confirm: "Подтвердить",
      firstCitTitle: '"Верное сердце всегда найдёт достойную награду"',
      firstCitAutor: "Масутацу Ояма",
      firstCitText:
        "Почитание традиций и негласных правил обществ издавна считается неотъемлемой частью джентельменского клуба. В классическом Лондоне XIX века популярность таких сообществ набирала необыкновенных высот, где из простых кофеин и чайных заведений помещения превращались в места, завсегдатаи которых, обладая совершенно разными профессиями, материальными состояниями и внутренними убеждениями, всегда находили общие ценности. Продолжая наследие таких клубов, мы в Darewin’s Club так же хотим поощрить наших единомышленников, которые являются первопроходцами клуба в такое непростое время. С нашей стороны, Клуб предоставляет возможность принять участие в «чистых» играх, что означает - Клуб не будет взымать комиссию за проведённые матчи. Данная возможность будет действовать до тех пор, пока не будет набрано необходимое количество игр суточной нормы для поддержания соревновательного духа внутри клуба. Именно так, мы хотим поддержать идею и культуру традиций клубов былых времён в эпоху кибер-спортивных дисциплин.",
      secondCitTitle:
        '"Друзей мы приобретаем не тем, что получаем от них услуги, а тем, что сами их оказываем"',
      secondCitAutor: "Фукидид",
      secondCitText:
        "Каким бы новое место не было странным или подозрительным, завлекательным или отпугивающим, опасным и неприятным - такое испытание гораздо легче перенести вместе с другом. Верность, преданность и сострадание являются неотъемлемыми качествами истинной дружбы, где предстоящие трудности и преграды затмевают на пути перед сплоченностью и крепкой поддержкой твоего товарища. Для нашего клуба будет честью оказаться местом, где ценность морали и сила духа поддержки приветствуются среди участников. Поэтому мы будем всячески такое стремление развивать и поддерживать. Как первый шаг наш Клуб создает поощрительную программу. Пригласите своего друга через уникальный код в Вашем профиле и к началу бета версии проекта Вы получите денежное вознаграждение за активность Ваших товарищей.",
      LoyalProg: "Программы лояльности",
      sup: "Поддержка",
      writeSup: "Написать в поддержку",
      supBut: "Обратиться",
      q1: " Как мне начать играть?",
      q2: " В моей команде был руинер, что делать?",
      q3: " Как мне вывести деньги и есть ли лимиты?",
      q4: " Как мне сыграть со своим другом?",
      q5: " Почему против меня попались сильные противники?",
      q6: " Я забыл пароль, что делать?",
      q7: " Я выиграл игру, но результаты игры были аннулированы. Почему?",
      a1:
        "Для того чтобы начать свою первую игру, Ваш баланс должен быть не менее 1 DWD (Darewin’s Dollar). Bы можете приобрести DWD в разделе «Средства». Далее нажать кнопку «Найти игру» либо перейти в раздел «Игры» и выбрать подраздел «Текущие матчи». Если мест в доступных лобби не будет, тогда платформа автоматически создаст лобби и запишет Вас в участники предстоящего матча. Удачи Вам!",
      a2:
        "Наш проект в первую очередь нацелен на создание достойного и добросовестного спортивно-игрового сообщества, поэтому мы всячески поощряем борьбу с «вредителями». Если Вы уверены в том, что в Вашей команде или команде противников был руинер/читер Вам нужно подать жалобу. Вы можете подать жалобу сразу после игры в разделе «Игры». Для этого Вам нужно перейти в подраздел «Прошедшие матчи», найти игру и нажать кнопку «Подать жалобу». Для более качественной и быстрой реакции на Ваше обращение, пожалуйста, укажите ник пользователя, проблему и приблизительное время инцидента внутри игрового процесса. Мы обязательно разберемся и решим Ваш вопрос.",
      a3:
        "Для вывода Ваших средств Вам нужно перейти в раздел «Средства», выбрать подраздел «Вывод средств», определиться с суммой вывода и платежной системой, после чего нажать кнопку «Вывод». Вас перенесёт на страницу платежной системы, где Вы сможете уже завершить процесс вывода средств. Учтите, что лимиты по транзакциям могут быть установлены самой платежной системой. С нашей стороны требование только одно – Ваш баланс не должен быть меньше или равен 0.",
      a4:
        "Для того чтобы сыграть со своим другом, Вы в первую очередь должны пригласить его стать участником клуба. Отправьте ему уникальный промо-код, который находится в Вашем профиле, и как только он зарегистрируется, добавьте его в свои друзья на платформе. Для этого перейдите в раздел «Друзья», в строке поиска введите его ник на сайте и нажмите кнопку «Добавить друга». После чего Вы можете добавить его в игровое пати. Но учтите, чтобы играть матчи командного формата, Вам нужно иметь состав из пяти человек. В противном случае Вы будете играть только соло формат с режимом Team Balance.",
      a5:
        "Как в реальной жизни, так и в нашем клубе, состязания – это процесс соревновательный, при котором участники борются за право быть лучшими в матче. Вы должны понимать, что Вы не всегда будете побеждать, так как противников очень много и они все хотят победить. Поэтому мы рекомендуем Вам подходить к играм со всей ответственностью и четким пониманием всех элементов внутри игрового процесса. В ближайшем будущем будет создана четкая система матчмейкинга по скиллбрекету, которая будет разделять на дивизионы игроков, чтобы слабые игроки чувствовали себя комфортно при уровне своей игры и равными противниками.",
      a6:
        "Перед тем как пытаться восстановить пароль, попробуйте его вспомнить. Зачастую пользователи создают пароль по определенному алгоритму либо уже использованный пароль. Если Вам не удалось вспомнить пароль, можете попробовать поискать его в сохраненных паролях браузера. Если Вы не сохраняете пароли, то для Вас остается один вариант – восстановление пароля путем его сброса. Перейдите в раздел «Профиль» или во время входа на сайт нажмите кнопку «Забыли пароль». Система предложит Вам пройти поэтапную процедуру восстановления пароля. Убедитесь в том, что Вы указали правильную почту для восстановления пароля. Никому не сообщайте данные для входа в Вашу почту, а также, данные для входа на сайт клуба.",
      a7:
        "В нашем клубе работает четкая система анализа матчей и грамотный алгоритм службы поддержки. Если результат матча, в котором Вы принимали участие, был аннулирован, то это могло произойти по нескольким причинам, к примеру, Ваша победа не была достойной, потому что в команде противника был руинер, либо в игре присутствовал читер, либо игроки разных команд были уличены в тиминге, чтобы сорвать проведение матча. Одним словом, если Вы играли честно и не нарушали правила клуба, в любом случае Ваше потраченное время и приложенные усилия будут компенсированы в денежном эквиваленте, а нарушители понесут наказание.",
      pQ: "Популярные вопросы",
      tayQ: "Расскажите о проблеме",
      money: "Средства",
      frend: "Друзья",
      prof: "Профиль",
      pravil: "Правила",
      game: "Игры",
      redy: "Готов",
      getComand: "Собрать команду",
      findG: "Найти игру",
      online: "Онлайн",
      LogOut: "Выйти",
      pravSog: "Правовое соглашение",
      trans: "Перевод",
      vuv: "Вывод",
      balans: "Баланс",
      transMet: "Выберите способ перевода",
      transBut: "Перевести",
      trPh: "Сумма перевода",
      sum: "Сумма",
      num: "Номер",
      type: "Тип",
      dateTime: "Дата и время",
      win: "Победа",
      search: "Поиск",
      last: "Недавние",
      changePhoto: "Изменить фото",
      aboutYou: "О себе",
      change: "Изменить",
      cont: "Контакты",
      sec: "Безопасность",
      refLink: "Реферальная ссылка",
      lang: "Язык",
      now: "cейчас активно",
      changePass: "Изменить пароль",
      solo: "Соло",
      party: "Пати",
      match1: "Прошедшие матчи",
      match2: "Предстоящие матчи",
      match3: "Активные матчи",
      players: "Игроки",
      matchNum: "Номер матча",
      enterMatch: "Войти в матч",
      playing: "Уже играют",
      gamerName: "Имя игрока",
      addEnterMoney: "Bвод/вывод средств",
      tellAbout: "Cообщить о нарушении",
      else: "Другое",
      enterMoney: "Вывести",
      cancel: "Отказатся",
      minut: "минут",
      gameStart: "Начало игры",
      regEnd: "До конца регистрации",
      matchType: "Тип матча",
      result: "Результат",
      sendRep: "Подать жалобу",
      topic: "Тема",
      AddTooFriends: " Запрос в друзья от",
      AddTooParty: " Приглашение в группу от",
      notAcceptFriend: "отклонил приглашение в друзья",
      AcceptFriend: "принял приглашение в друзья",
      AcceptLobby: "принял приглашение в группу",
      notAcceptParty: "отклонил приглашение в группу",
      LobbyDestroed: "Лобби розпущено",
      accept: "Добавить",
      cancel: "Отклонить",
      len: "Языки",
      apply: "Применить",
      chat: "Глобальный чат",
      brothersF: "Братья Ф.",
      notLider: "Вы не лидер группы",
      notReady: "Не готов",
      chatBtn: "Чат",
      chatPlaceholder: "Ваше сообщение",
      rule11:
        "1.Darewin’s Club является клубом закрытого типа, для вступления в который нужно пройти обязательную регистрацию и идентификацию личности. Требования по идентификации могут быть расширены согласно нормам и правилам политики AML и FFT.",
      rule21:
        "2. Для регистрации необходимо указать действующий email и подтвердить его действительность. Email, так же как и уникальный ник, остается неизменным и закрепляется за пользователем клуба на постоянной основе.",
      rule31:
        "3. Клуб оставляет за собой право вносить поправки и изменения в правила клуба. О таких изменениях члены клуба будут уведомлены в электронной почте.",
      rule41:
        "4. Клуб имеет полное право и полномочия в вопросе принятия/исключения/временного ограничения доступа члену(-ам) клуба. Решение рассматривается в индивидуальном порядке и принимается администрацией клуба.",
      rule51:
        "5. Все члены клуба обязаны соблюдать правила клуба Darewin’s Club. Несоблюдение правил влечет за собой штрафные санкции такие как: материальное наказание, временное ограничение доступа, исключение без права на помилование.",
      rule61:
        "6. Только администрация клуба имеет право на окончательное решение в споре между членами клуба либо при вынесении вердиктов, касающихся результатов матчей, поведения пользователей, случаев мошенничества и т.п. вопросов.",
      rule71:
        "7. Любой член клуба имеет право обратиться к администрации клуба напрямую для решения его вопроса.",
      rule81:
        "8. Если вопросы/конфликты/спорные моменты не решены между членами клуба самостоятельно, каждая из сторон вопроса/конфликта/спорного момента имеет полное право обратиться к администрации для помощи в разрешении вопроса/конфликта/спорного момента. В таком случае администрация берет на себя полную ответственность в вынесении вердикта. Срок вынесения вердикта не должен превышать 48 часов с момента обращения по конкретному случаю. В редких случаях администрации потребуется больше времени для вынесения решения, о чем будут уведомлены стороны вопроса/конфликта/спорного момента.",
      rule91:
        "9. Все клубные игры находятся в альфа-тестировании, что означает клуб Darewin’s Club на раннем этапе развития предоставляет своим пользователям проводить состязания только по дисциплине Dota2 в рамках конкретных правил проведения матчей в Darewin’s Club.",
      rule12:
        "10. В Darewin’s Club запрещена реклама любого формата, за исключением тех случаев, когда это оговорено с администрацией.",
      rule22:
        "11. В Darewin’s Club нет четких правил поведения и рамок приличия, однако каждый член клуба должен уважать остальных участников клуба, относиться к ним с должным уровнем приличия и взаимопонимания.",
      rule32:
        "12. Если слова/действия одного участника Darewin’s Club задевают или унижают чувства, мысли и т.д. другого участника, то конфликтная ситуация должна быть решена между участниками клуба. В случае невозможности данного действия потерпевшая сторона имеет полное право обратиться к администрации со своей жалобой. При развитии такого сценария меры наказания могут варьироваться от публичного извинения и вплоть до материального взыскания. Крайними мерами будет исключение из клуба с полным лишением средств и права на амнистию.",
      rule42:
        "13. В общем чате Darewin’s Club запрещены флуд, спам, кибербулинг, линки на непроверенные источники, нецензурная лексика, публикация заведомо ложных сведений/информации, вымогательство и т.п. действия. В случае нарушения данного правила член клуба может получить временный бан.",
      rule13:
        "14. Все игры проходят по правилу Bo1, Captains mode, team balance/shuffle players.",
      rule23:
        "15. Недоукомплектованные команды (не полный состав 5 человек) участвуют в играх формата Solo.",
      rule33:
        "16. Таймер лобби игры на сайте – 10 минут. Если в течение 10 минут лобби на сайте не будет укомплектовано – оно автоматически разрушается, взносы возвращаются участникам.",
      rule43: "17. Таймер лобби в самой игре – 5 минут.",
      rule53:
        "18. Если пользователь покинул лобби на сайте, в котором уже зарегистрирован, он получает штраф в размере 50% от взноса.",
      rule63:
        "19. Если пользователь не подключился к лобби в игре, в котором уже зарегистрирован, он получает штраф в размере 100% от взноса. Игра аннулируется. Выплачивается компенсация остальным игрокам.",
      rule73:
        "20. Капитан может определяться несколькими путями: по добровольному желанию и согласию игроков в команде, через команду –roll (игрок с наибольшим значением становится капитаном) либо игрок с наивысшим показателем рейтинга.",
      rule83:
        "21. Если игрок одной из команд покинет игру (Leave), то игра продолжается. Если победит команда, у которой 5 человек, то они получат стандартный призовой фонд. Если победит команда в меньшинстве, то они получат увеличенный призовой фонд.",
      rule93:
        "22. Если игрок в процессе игры будет наносить вред игровому процессу, использовать читы, находиться афк, разбивать предметы и всячески влиять на игру в интересах поражения своей команды, то по результатам игры, игрок может потерять игровой взнос, а результаты игры аннулируются.",
      rule103:
        "23. У каждой команды есть по 3 паузы, общей продолжительностью в 7 минут. Если игрок не вернулся в игру по истечению 7 минут, то у него остается 5 минут внутри игрового времени (стандартное время, продиктованное условиями Valve). Если игрок не возвращается по истечению следующих 5 минут после паузы, то ему присуждается техническое поражение.",
      rule113:
        "24. Продолжительность пауз должна засекаться подручными средствами капитанов обеих команд. При обжаловании преждевременного отжима паузы будет учитываться погрешность в 10 секунд. ",
      rule123:
        "25. При злоупотреблении пауз в важный момент (смок, предстоящий килл, после убийства врага и других важных ситуациях) либо прожимание/отжимание пауз без готовности противника, игроку, нарушившему правило, присуждается техническое поражение при возникновении такого инцидента.",
      rule133:
        "26. Победа присуждается команде, которая уничтожила главное строение (Трон) противника.",
      rule14: "27. Все игры проходят по правилу Bo1, Captains mode.",
      rule24:
        "28. Полностью укомплектованные команды (полный состав 5 человек) участвуют в играх формата Party.",
      rule34:
        "29. Таймер лобби игры на сайте – 10 минут. Если в течение 10 минут лобби на сайте не будет укомплектовано – оно автоматически разрушается, взносы возвращаются участникам.",
      rule44: "30. Таймер лобби в самой игре – 5 минут.",
      rule54:
        "31. Если пользователь команды покинул лобби на сайте, в котором уже зарегистрирован, вся команда покидает лобби и получает штраф в размере 50% от взноса. ",
      rule64:
        "32. Если пользователь не подключился к лобби в игре, в котором уже зарегистрирован, вся команда получает штраф в размере 100% от взноса. Игра аннулируется. Выплачивается компенсация другой команде.",
      rule74:
        "33. Если игрок одной из команд покинет игру (Leave), то игра продолжается. ",
      rule84:
        "34. Если игрок одной из команд в процессе игры будет наносить вред игровому процессу, использовать читы и манипуляции со сторонним софтом, которые дают преимущество своей команде, то по результатам игры, вся его команда теряет игровой взнос, а результаты игры аннулируются.",
      rule94:
        "35. У каждой команды есть по 3 паузы, общей продолжительностью в 7 минут. Если игрок не вернулся в игру по истечению 7 минут, то у него остается 5 минут внутри игрового времени (стандартное время, продиктованное условиями Valve). Если игрок не возвращается по истечению следующих 5 минут после паузы, то ему присуждается техническое поражение.",
      rule104:
        "36. Продолжительность пауз должна засекаться подручными средствами капитанов обеих команд. При обжаловании преждевременного отжима паузы будет учитываться погрешность в 10 секунд. ",
      rule114:
        "37. При злоупотреблении пауз в важный момент (смок, предстоящий килл, после убийства врага и других важных ситуациях) либо прожимание/отжимание пауз без готовности противника, команде игрока, который нарушил это правило, присуждается техническое поражение при возникновении такого инцидента.",
      rule124:
        "38. Победа присуждается команде, которая уничтожила главное строение (Трон) противника.",

      pgr: "Правила проведения игр Party формата",
      sgr: "Правила проведения игр Solo формата",
      br: "Правила поведения",
      gr: "Общие положения",
      t1:
        "Это Ваш статус. Когда он активен, Вы можете искать игру и получать уведомления от нашего клуба ",
      t2:
        "Эта кнопка отправит Вас в раздел, где Вы сможете добавить друзей в команду, чтобы сыграть в 5ом",
      t3:
        "Эта кнопка создаст Вам лобби, если других активных лобби нет. Если Вы играете в 5ом, тогда лобби будет создано для команды",
      t4:
        "Здесь Вы сможете найти игру, посмотреть историю матчей либо присоединиться к активному лобби",
      t5: "Режим игры только для соло игроков либо неполных составов",
      t6: "Режим игры только для игр в полном составе команды",
      t7:
        "Здесь можно посмотреть историю матчей, увидеть ссылку на Dotabuff либо подать жалобу на игрока",
      t8:
        "Здесь находится информация о доступных лобби и уже проходящих матчах",
      t9: "Здесь находится информация о матче, в котором Вы уже участвуете",
      t10: "Здесь Вы сможете прочитать и принять правила нашего клуба",
      t11:
        "Здесь находится личная информация, привязка Steam аккаунта и ссылка на реферальную программу",
      t12:
        "Здесь находится список Ваших друзей и недавних игроков, глобальный чат и возможность сформировать команду",
      t13:
        "Здесь Вы сможете приобрести внутриклубную валюту, а также вывести ее в реальные деньги доступными способами",
      t14:
        "Это раздел активных программ лояльности, за которые члены клуба будут получать вознаграждения",
      t15:
        "Здесь Вы сможете обратиться к администрации и получить ответы на частые вопросы",
      tutorialSkip: "Пропустить",
      deletePhoto: "Удалить фото",
      partyInviteSendet: "Приглашение отправлено",
      noMoney:
        "Недостаточно средств чтобы начать игру. Пожалуйста пополните свой счет",
      acceptLobbyInvite: "Вступить",
    }),
  ],
});
