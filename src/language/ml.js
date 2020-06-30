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
      header2: "Principles",
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
      promo: "Promotional code",
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
    }),

    new MLanguage("russian").create({
      alfa: "Альфа версия",
      p1GetMore: "Узнать больше",
      header1: "Главная",
      header2: "Принцыпы",
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
    }),
  ],
});
