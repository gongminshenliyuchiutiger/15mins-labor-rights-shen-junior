const modulesData = [
    // 個體勞動 (Individual Labor) - 12 Modules
    {
        id: 1, type: 'individual', icon: 'fa-id-card', title: '我的第一份工作契約', subtitle: '勞動契約基礎知識',
        prep: '準備幾份常見的工讀契約範本供學生傳閱。',
        goal: '理解勞資共識即契約，並認清勞基法是最底線。',
        steps: [
            { time: '3m', icon: 'fa-handshake-simple', type: '情境破冰', content: '老闆說「明天來上班」，這句口頭承諾在法律上有用嗎？', q: '如果你沒簽紙本，老闆後來賴帳說沒請過你，你會怎麼證明你真的有在那上班？' },
            { time: '8m', icon: 'fa-file-lines', type: '核心圖解', content: '介紹契約三要素：當事人、勞務供給、薪資支付。強調「勞基法是地板」。', q: '如果合約寫「月薪 1 萬」（低於基本工資），但你自願簽名了，這份合約有效嗎？' },
            { time: '4m', icon: 'fa-circle-check', type: '實戰勾選', content: '拿出一份「陷阱合約」，請學生圈出三個違法的地方。', q: '看到「不足一小時不計薪」或「遲到一分扣一百」，你有勇氣跟老闆說不嗎？' }
        ],
        quizzes: [
            { q: '勞動契約一定要簽紙本才算成立嗎？', a: '不一定！只要雙方對工作內容與薪資達成口頭共識，契約即成立。' },
            { q: '如果契約內容低於勞基法的標準，該條款是否有效？', a: '無效！勞基法是最低保障，任何低於此標準的約定均屬無效。' },
            { q: '工讀生是否也享有勞基法的保障？', a: '是的。只要是受雇勞工，不論全職或兼職，皆受勞基法保護。' }
        ],
        flex: '可額外討論「承攬」與「僱傭」的區別。',
        summary: '口頭也算數，法律保地板，簽名看清楚。'
    },
    {
        id: 2, type: 'individual', icon: 'fa-clock', title: '加班費怎麼算才不虧？', subtitle: '工時與加班規範',
        prep: '投影計算機介面。',
        goal: '掌握加班費計算邏輯（1.34、1.67），並確立「加班須同意」原則。',
        steps: [
            { time: '3m', icon: 'fa-battery-half', type: '壓力測試', content: '飲料店生意太好，店長要求你多留兩小時補貨。', q: '這多出來的兩小時，是用原本的時薪算，還是要加成？你覺得加多少才合理？' },
            { time: '7m', icon: 'fa-chart-column', type: '規則说明', content: '介紹前兩小時 1.34 倍，後兩小時 1.67 倍。', q: '為什麼加班費要給的比平常高？法律設計這個「倍率」是為了讓勞工多賺錢，還是為了讓老闆少叫人加班？' },
            { time: '5m', icon: 'fa-calculator', type: '速算挑戰', content: '時薪 180 元計算加班一小時領多少？', q: '如果老闆說「換成補休」可以嗎？如果換成補休，應該是 1:1 還是按倍率換？' }
        ],
        quizzes: [
            { q: '加班費前兩小時的法定計算倍率是多少？', a: '時薪乘以 1.34 倍。' },
            { q: '雇主可以規定「加班只能換補休」而拒付加班費嗎？', a: '不行。是否換補休由勞工自主決定，且應依勞工意願。' },
            { q: '每天正常工時加上加班，上限是多少小時？', a: '每日總計不得超過 12 小時。' }
        ],
        flex: '討論「責任制」的迷思。',
        summary: '前二 1.34，後二 1.67，換補休看我意願。'
    },
    {
        id: 3, type: 'individual', icon: 'fa-mask', title: '求職防騙「七不三要」', subtitle: '求職防禦力',
        prep: '假求職截圖、1955 專線、三要提醒卡。',
        goal: '提升辨識詐騙廣告的能力，學習求職自我保護。',
        steps: [
            { time: '3m', icon: 'fa-magnifying-glass', type: '找碴遊戲', content: '展示一張充滿誘餌的 LINE 徵才圖。', q: '這張廣告裡，哪三個地方讓你覺得「這工作太好賺了」？' },
            { time: '7m', icon: 'fa-user-shield', type: '防騙必殺技', content: '講解「七不」與「三要」：不繳錢、不購買、不辦卡、不簽約、證件不離身、不飲用不明飲料、不非法工作／要請家人或親友陪同面試或事先告知面試地點、要檢視應徵資訊屬實、要做好蒐集應徵公司資料。', q: '保留廣告截圖，這在發生糾紛時有什麼法律效用？' },
            { time: '5m', icon: 'fa-hand-dots', type: '實戰模擬', content: '練習如何拒絕面試官「暫收提款卡」的要求。', q: '面試官說「提款卡要對帳」，你會怎麼用「要存疑」保護自己？' }
        ],
        quizzes: [
            { q: '求職防騙的「三要」原則包含哪些？', a: '要請家人或親友陪同面試或事先告知面試地點、要檢視應徵資訊屬實、要做好蒐集應徵公司資料。' },
            { q: '面試時老闆要求「保管身分證」，這違反了哪一項？', a: '違反「證件不離身」原則。' },
            { q: '如果發現求職廣告要求「先付保證金」，該怎麼辦？', a: '應立即停止應徵。七不原則之一就是「不繳錢」。' }
        ],
        flex: '可討論近期「海外打工詐騙」案例。',
        summary: '求職前多查、面試時帶人、三要七不記心頭。'
    },
    {
        id: 4, type: 'individual', icon: 'fa-sack-dollar', title: '試用期沒薪水對嗎？', subtitle: '基本工資保障',
        prep: '當年度最新工資數值投影。',
        goal: '確立「勞務供給必給薪」原則，認識基本工資。',
        steps: [
            { time: '3m', icon: 'fa-comments-dollar', type: '迷思破解', content: '老闆說「見習試做，沒錄取就不支薪喔」。', q: '這兩天的汗水，在法律上是可以被免費抹去的嗎？' },
            { time: '7m', icon: 'fa-coins', type: '法條掃描', content: '介紹時薪/月薪底線，強調不能隨意預扣薪資（如賠杯子）。', q: '如果月底發現被扣了「清潔費」導致低於基本工資，合法嗎？' },
            { time: '5m', icon: 'fa-calculator', type: '算算看', content: '計算 20 小時的應得最低薪資。', q: '如果領不到基本工資，你一個月會損失多少物資？' }
        ],
        quizzes: [
            { q: '雇主可以用「表現不佳」為由支領低於基本工資的薪水嗎？', a: '不行！基本工資是法定底線，任何理由都不得低於此數額。' },
            { q: '打工第一天在試用期，老闆可以不給這天的薪水嗎？', a: '不行！只要有提供勞務事實，雇主就必須支付薪資。' },
            { q: '如果打破杯子，老闆可以直接從薪水扣錢嗎？', a: '不行！雇主不得預扣勞工工資作為賠償費用。' }
        ],
        flex: '可討論實習生與工讀生的薪資。',
        summary: '薪水底線法律定，試用期間也要錢。'
    },
    {
        id: 5, type: 'individual', icon: 'fa-umbrella', title: '工讀生也要勞保嗎？', subtitle: '社會保險保障',
        prep: '勞保投保表範本。',
        goal: '釐清勞保、就保與勞退對打工族的保障意義。',
        steps: [
            { time: '3m', icon: 'fa-file-invoice', type: '薪資單揭秘', content: '分析薪資單中的代扣保費項目。', q: '這筆錢每月被扣掉，你覺得它是「消費」還是「保險投資」？' },
            { time: '7m', icon: 'fa-piggy-bank', type: '架構說明', content: '勞保保險、勞退養老金（雇主提撥 6%）。', q: '老闆說「多給 1000 元，但不幫你投勞保」，你覺得划算嗎？' },
            { time: '5m', icon: 'fa-mobile-screen', type: '查詢教學', content: '介紹如何查詢自己的勞退帳戶。', q: '你想過 40 年後，你的勞退帳號裡會有多少創業基金嗎？' }
        ],
        quizzes: [
            { q: '「勞退 6%」是從員工薪水裡扣的嗎？', a: '不是。這是雇主額外提撥到帳戶的。' },
            { q: '工讀生受感冒可以請病假嗎？', a: '可以。勞工請假規則同樣適用。' },
            { q: '勞保除了養老，還有什麼功能？', a: '包含生育、傷病、失能、死亡補償等。' }
        ],
        flex: '強調第一天上班就得加保。',
        summary: '打工權益按比例，提撥保險不可少。'
    },
    {
        id: 6, type: 'individual', icon: 'fa-hourglass-half', title: '工作幾小時要休息？', subtitle: '工時與休息間隔',
        prep: '排班表範本。',
        goal: '認識「工作4小時休30分鐘」與工時最高上限。',
        steps: [
            { time: '3m', icon: 'fa-person-running', type: '情境引入', content: '飲料店連續站 5 小時沒喝水。', q: '即使店長人很好，法律會允許他讓店員連做 6 小時不休息嗎？' },
            { time: '7m', icon: 'fa-clock', type: '規則说明', content: '解說每 4 小時必休 30 分鐘，每日上限 8 小時。', q: '如果你是老闆，要怎麼安排 9 點到 18 點的休息才合法？' },
            { time: '5m', icon: 'fa-pencil', type: '找碴挑戰', content: '在違法班表中找出錯誤。', q: '這份瘋狂排班表中，哪一個時段最容易讓員工過勞？' }
        ],
        quizzes: [
            { q: '連續工作 4 小時後，必須有多少時間的休息？', a: '至少應有 30 分鐘的休息時間。' },
            { q: '休息時間，老闆可以叫我去接電話嗎？', a: '休息時間應是勞工自由支配。待命工作視為加班。' },
            { q: '每日正常工時的上限是多少小時？', a: '每日上限 8 小時，每週上限 40 小時。' }
        ],
        flex: '討論待命時間是否算工時。',
        summary: '休息是為了安全，4 小時必休半小時。'
    },
    {
        id: 7, type: 'individual', icon: 'fa-calendar-check', title: '一週到底休幾天？', subtitle: '一例一休規則',
        prep: '一週日曆卡。',
        goal: '區分「例假」與「休息日」，了解週休二日。',
        steps: [
            { time: '3m', icon: 'fa-calendar-day', type: '連上 7 天', content: '老闆要求你連上 12 天。', q: '你覺得一個人連續工作兩週不休息，對身心會有什麼影響？' },
            { time: '8m', icon: 'fa-layer-group', type: '核心圖解', content: '區分例假（禁加班）與休息日（可加班且錢多）。', q: '老闆在「例假日」給雙倍錢叫你回來，合法嗎？' },
            { time: '4m', icon: 'fa-hand-holding-heart', type: '福利討論', content: '討論法律為何限制例假不能隨便換錢。', q: '如果大家只想要錢而不休假，社會醫療成本會上升嗎？' }
        ],
        quizzes: [
            { q: '勞工每 7 日應有多少天的休息作為例假？', a: '至少應有 1 天作為例假。' },
            { q: '「休息日」加班跟「例假日」加班有什麼差別？', a: '休息日需付較高加班費；例假除非極端情況否則禁止加班。' },
            { q: '雇主可以要求勞工連上 7 天班而不給例假嗎？', a: '不行。原則上勞工不得連續工作超過 6 天。' }
        ],
        flex: '可提及補休的期限。',
        summary: ' 7 天要有 2 休，例假絕不能挪。'
    },
    {
        id: 8, type: 'individual', icon: 'fa-shield-heart', title: '職場安全「三要」與職災', subtitle: '職場防護與補償',
        prep: '現場危險圖、三要防禦卡。',
        goal: '學習安全「三要」原則，並理解職災補償。',
        steps: [
            { time: '3m', icon: 'fa-truck-medical', type: '緊急情境', content: '外送車禍或機器受傷的第一時間處理。', q: '事故發生時，法律如何保護第一現場？打給誰最有用？' },
            { time: '7m', icon: 'fa-user-shield', type: '安全三要', content: '講解「要通報、要拒絕、要離開」三原則。', q: '老闆要求在沒防護下爬高，你敢用「要拒絕」保護自己嗎？' },
            { time: '5m', icon: 'fa-phone-volume', type: '職災三步', content: '補償醫療與原領工資，定義通勤職災。', q: '外送車禍算職災嗎？如果沒加保，老闆還是得賠嗎？' }
        ],
        quizzes: [
            { q: '職場安全「三要」原則是什麼？', a: '「要通報」主管/1955、「要拒絕」危險工作、「要離開」危險現場。' },
            { q: '上班途中意外（含外送）算職災嗎？', a: '算。這屬於「通勤職災」保障範圍。' },
            { q: '職災醫療期間，老闆可以開除勞工嗎？', a: '不行。法律禁止在此期間終止勞動契約。' }
        ],
        flex: '討論颱風天外送「退避權」。',
        summary: '安全三要保性命，工傷意外雇主賠。'
    },
    {
        id: 9, type: 'individual', icon: 'fa-gavel', title: '遇到慣老闆找誰助？', subtitle: '權利救濟管道',
        prep: '1955 專線圖案。',
        goal: '學習基礎蒐證方法與 1955 諮詢。',
        steps: [
            { time: '3m', icon: 'fa-user-pen', type: '受屈情境', content: '老闆無故扣薪且惡言相向。', q: '生氣時，第一步是吵架還是拍照存證？' },
            { time: '7m', icon: 'fa-camera-rotate', type: '蒐證重點', content: 'LINE 對話、打卡紀錄、薪單。', q: '沒紙本合約，LINE 說好要上班能當證據嗎？' },
            { time: '5m', icon: 'fa-headset', type: '求救演練', content: '模擬 1955 撥打詢問糾紛。', q: '你敢撥打 1955 嗎？它是匿名的嗎？' }
        ],
        quizzes: [
            { q: '勞資爭議的免費諮詢專線是多少？', a: '1955 勞工諮詢申訴專線。' },
            { q: '蒐證中，哪些是「薪資證明」？', a: '薪資條、存摺紀錄、對話細節。' },
            { q: '離職後發現少繳勞保還能檢舉嗎？', a: '可以。權利追溯不因離職結束。' }
        ],
        flex: '可解釋調解制度。',
        summary: ' 1955 有求必應，證據第一心不驚。'
    },
    {
        id: 10, type: 'individual', icon: 'fa-venus-mars', title: '職場也要男女平等', subtitle: '性別平等與防護',
        prep: '性平法重點圖卡。',
        goal: '認識性別工作平等法，遠離職場性騷擾。',
        steps: [
            { time: '3m', icon: 'fa-scale-balanced', type: '薪資平等', content: '同樣工作，男生女生領得錢不一樣，對嗎？', q: '為什麼歷史上有「同工不同酬」的歪風？這種事情現在還能存在嗎？' },
            { time: '8m', icon: 'fa-shield-halved', type: '拒絕騷擾', content: '老闆開不舒服的笑話，甚至有肢體碰觸。', q: '如果你感覺「不舒服」，那算是騷擾嗎？你該忍耐還是大聲說不？' },
            { time: '4m', icon: 'fa-handcuffs', type: '法律防線', content: '介紹申訴流程：向公司申訴、向勞工局申訴。', q: '如果你檢舉性騷擾，老闆反而開除你，這樣合法嗎？' }
        ],
        quizzes: [
            { q: '職場性騷擾發生時，雇主有什麼責任？', a: '雇主應採取防治措施，並在事件發生後立即有效處理。' },
            { q: '法律是否保障勞工不因性別而有不同的薪資待遇？', a: '是。性別工作平等法規定「同工同酬」原則。' },
            { q: '遇到性騷擾時可以向哪裡尋求外部協助？', a: '各縣市政府勞工局或撥打 1955 專線。' }
        ],
        flex: '討論產假與陪產假的設計意義。',
        summary: '性別平等大步走，職場尊重最重要。'
    },
    {
        id: 11, type: 'individual', icon: 'fa-suitcase-rolling', title: '我的特休在哪裡？', subtitle: '特別休假權益',
        prep: '特休天數對照表。',
        goal: '學會計算特休天數，掌握排定權。',
        steps: [
            { time: '3m', icon: 'fa-plane', type: '休假計畫', content: '工作半年，我想請假去日本玩，老闆可以擋嗎？', q: '你覺得工作多久應該要有一次「充電假期」？這錢要扣薪嗎？' },
            { time: '8m', icon: 'fa-calendar-days', type: '天數詳解', content: '工作半年 3 天，一年 7 天，類推。強調「自主排定權」。', q: '如果老闆說「特休由我來排」，這對嗎？法律是誰在決定假期的？' },
            { time: '4m', icon: 'fa-hand-holding-dollar', type: '沒休完怎麼辦', content: '年底沒休完的特休必須換成薪水。', q: '如果你不想休假，想換成錢，這合約可以事先寫死嗎？' }
        ],
        quizzes: [
            { q: '工作滿半年，法定特休天數是多少？', a: '3 天。' },
            { q: '特休的「排定權」歸屬誰？', a: '歸勞工。除非雇主有急迫經營需要，否則不得干涉。' },
            { q: '年底特休沒休完，雇主必須？', a: '必須發給工資作為補償（換薪）。' }
        ],
        flex: '說明個人帳戶與特休透明化的重要。',
        summary: '年資累積假變多，休假排定我作主。'
    },
    {
        id: 12, type: 'individual', icon: 'fa-user-secret', title: '老闆能看我的 LINE 嗎？', subtitle: '職場隱私與通訊',
        prep: '隱私侵權案例摘要。',
        goal: '建立職場隱私邊界觀點，學習通訊自我保護。',
        steps: [
            { time: '4m', icon: 'fa-mobile-vibration', type: '通訊檢查', content: '老闆要求你交出手機查閱與同事的群組紀錄。', q: '你的手機是公司的財產還是個人的？老闆有權要求「公開透明」嗎？' },
            { time: '7m', icon: 'fa-eye-slash', type: '隱私界限', content: '介紹監視器只能用於防盜安全，不可作為監視員工細節工具。', q: '如果在每一張辦公桌前面都裝一個監視器盯著你，你會覺得這是安全還是監視？' },
            { time: '4m', icon: 'fa-comment-slash', type: '下班靜音', content: '下班後老闆一直傳 LINE 交辦工作，這算加班嗎？', q: '如果你「已讀」並「回覆」老闆的工作，這 5 分鐘算不算勞動？' }
        ],
        quizzes: [
            { q: '雇主可以直接查閱員工的私人手機通訊內容嗎？', a: '原则上不行。這涉及個人隱私，除非法律另有授權或約定。' },
            { q: '下班後雇主透過通訊軟體交辦工作，可否申報加班？', a: '可以。只要有執行勞務（如回覆公務、整理資料）之事實。' },
            { q: '監視器錄影主要應作為什麼目的使用？', a: '安全防備、防竊或管理必要。不得純粹用於監視勞工私人舉止。' }
        ],
        flex: '討論「離職後群組應退出」的實務建議。',
        summary: '隱私界限要守住，下班通訊算加班。'
    },

    // 集體勞動 (Collective Labor) - 12 Modules
    {
        id: 13, type: 'collective', icon: 'fa-users', title: '為什麼單打獨鬥沒用？', subtitle: '勞資權力不對等',
        prep: '一張椅子與十張椅子的對比感。',
        goal: '認同集體發聲的必要。',
        steps: [
            { time: '4m', icon: 'fa-scale-unbalanced', type: '秤秤看', content: '如果你覺得決定不公，一個人提 vs 全班連署，校長聽誰的？', q: '面對強大企業，一個人說話真的有份量嗎？' },
            { time: '7m', icon: 'fa-people-group', type: '團結意義', content: '工會原理：平衡雙方資源與談判籌碼。', q: '為什麼團結一致，老闆就不敢隨便「殺一儆百」？' },
            { time: '4m', icon: 'fa-hand-peace', type: '共感思考', content: '什麼情況下你願意支持同事？', q: '「冷眼旁觀」與「並肩作戰」，哪個更能改變職場？' }
        ],
        quizzes: [
            { q: '為什麼法律鼓勵員工組成「工會」？', a: '因單一勞工極度弱勢，集結才能公平談判。' },
            { q: '什麼是「集體協商」？', a: '透過工會代表，針對勞務條款進行談判。' },
            { q: '無工會下，天秤會傾向哪方？', a: '強烈傾向資方，因掌握生存資源。' }
        ],
        flex: '可提及著名的勞工運動簡史。',
        summary: '單箭易折，萬箭難撼。集體發聲才有對等。'
    },
    {
        id: 14, type: 'collective', icon: 'fa-shield-heart', title: '組隊打怪不犯法！', subtitle: '憲法結社權',
        prep: '憲法第 14 條條文。',
        goal: '確認組工會權力受憲法保障。',
        steps: [
            { time: '3m', icon: 'fa-scroll', type: '憲法力量', content: '解說憲法「結社自由」意義。', q: '老闆說「簽約就不能參加工會」，這合約有用嗎？' },
            { time: '7m', icon: 'fa-ban', type: '不當勞動', content: '打壓工會屬違法，可受罰。', q: '發獎金給「不參加工會」的人算什麼行為？' },
            { time: '5m', icon: 'fa-gavel', type: '判斷真偽', content: '判斷哪些是老闆的犯規行為案例。', q: '法官判斷犯規時，最看重什麼？' }
        ],
        quizzes: [
            { q: '雇主可以「參加工會」為由解僱員工嗎？', a: '不行！這屬不當勞動行為，依法處分。' },
            { q: '憲法保障勞工的哪項權力？', a: '結社自由（結社權）。' },
            { q: '發生不當打壓可向哪申請救濟？', a: '勞動部不當勞動行為裁決委員會。' }
        ],
        flex: '說明行政救濟管道。',
        summary: '工會是合法組隊，資方干預必違法。'
    },
    {
        id: 15, type: 'collective', icon: 'fa-handshake', title: '工會都在做什麼？', subtitle: '多元服務角色',
        prep: '各式工會活動照片。',
        goal: '破除對工會的刻板印象。',
        steps: [
            { time: '4m', icon: 'fa-comments', type: '印象檢視', content: '工會只會抗議嗎？', q: '除了抗爭一無所有的工會，員工會想參加嗎？' },
            { time: '7m', icon: 'fa-gears', type: '功能盤點', content: '福利爭取、橋樑、諮調、勞安。', q: '除了加薪，你想讓工會幫你談什麼？' },
            { time: '4m', icon: 'fa-tags', type: '類型辨識', content: '認識企業工會與職業工會區別。', q: '選對適合自己的職類工會。' }
        ],
        quizzes: [
            { q: '現代工會除了抗爭外還有哪些功能？', a: '福利、溝通、法律、勞安、專業訓練。' },
            { q: '為什麼工會要辦理教育訓練？', a: '提升技術、就業保障、建立網絡。' },
            { q: '遇到糾紛，工會能提什麼幫助？', a: '法律諮詢、陪同調解、集體救濟。' }
        ],
        flex: '展示進步性條約案例。',
        summary: '工會是日常後盾，更是勞資溝通的最佳翻譯。'
    },
    {
        id: 16, type: 'collective', icon: 'fa-chart-pie', title: '公司賺錢怎麼分？', subtitle: '集體協約威力',
        prep: '圓餅圖圖標（年終、特別假）。',
        goal: '理解團體協約優於勞基法。',
        steps: [
            { time: '3m', icon: 'fa-cake-candles', type: '利潤分配', content: '大賺錢時誰去談獎金？', q: '老闆說「不保證明年賺」，你一個人怎麼回？' },
            { time: '7m', icon: 'fa-file-contract', type: '契約概念', content: '團體協約：工會談下來的權利，沒簽了就得做。', q: '集體簽 vs 個人簽在法律地位上不同。' },
            { time: '5m', icon: 'fa-hand-holding-dollar', type: '願望清單', content: '最想爭取的協約項目？', q: '下午茶 or 健檢？' }
        ],
        quizzes: [
            { q: '內容通常優於勞基法的書面契約稱為？', a: '團體協約。' },
            { q: '違反協約工會可怎麼做？', a: '要求履行、申請裁決或訴訟。' },
            { q: '協約包含哪些非薪資內容？', a: '特休、育兒津貼、環境改善。' }
        ],
        flex: '討論「福委會」與「工會」的關聯。',
        summary: '團結力量談協約，福利保障遠超勞基法。'
    },
    {
        id: 17, type: 'collective', icon: 'fa-comments', title: '坐下來好好談：勞資會議', subtitle: '法定協商平台',
        prep: '會議示意圖。',
        goal: '認識勞資會議的制度。',
        steps: [
            { time: '3m', icon: 'fa-users-rectangle', type: '制度簡介', content: '法規要求定期召開對等會議。', q: '代表數量對等的含意？' },
            { time: '8m', icon: 'fa-table-list', type: '議題探討', content: '排班、服裝、工作環境。', q: '非金錢事項討論的意義？' },
            { time: '4m', icon: 'fa-person-chalkboard', type: '模擬推選', content: '體會代表民意的榮譽感。', q: '冷靜提案 or 大吼？' }
        ],
        quizzes: [
            { q: '勞資代表的人數配置應？', a: '對等（人數相等）。' },
            { q: '通常多久應舉辦一次？', a: '至少每三個月一次。' },
            { q: '決議對公司有強制力嗎？', a: '具勞資合議性質，公司應落實。' }
        ],
        flex: '說明裁員前緩衝作用。',
        summary: '勞資會議常態開，日常小事不變大糾紛。'
    },
    {
        id: 18, type: 'collective', icon: 'fa-tower-broadcast', title: '力量不夠？打電話找隊友', subtitle: '跨公司工會資源',
        prep: '工會 Logo。',
        goal: '知道可加入外部工會獲援。',
        steps: [
            { time: '4m', icon: 'fa-network-wired', type: '孤身奮戰', content: '小店員工糾紛。', q: '人數不足組工會（不足30人）怎麼辦？' },
            { time: '7m', icon: 'fa-satellite-dish', type: '資源跨接', content: '職業/產業工會可跨公司。', q: '對職涯發展有何幫助？' },
            { time: '4m', icon: 'fa-map-location-dot', type: '地圖尋寶', content: '查找住家附近據點。', q: '工會像各項體育協會一樣專業！' }
        ],
        quizzes: [
            { q: '人數不滿 30 人可如何爭權？', a: '加入相關職業工會或產業工會。' },
            { q: '企業工會 vs 產業工會？', a: '企業限同司；產業跨同類。' },
            { q: '全台最高調解單位？', a: '各縣市政府勞工局。' }
        ],
        flex: '討論外送工會新型。',
        summary: '不必獨自扛，前輩都是靠山。'
    },
    {
        id: 19, type: 'collective', icon: 'fa-bullhorn', title: '權利與代價：看見罷工', subtitle: '抗爭實例反思',
        prep: '罷工片段。',
        goal: '透過案例反思。',
        steps: [
            { time: '4m', icon: 'fa-newspaper', type: '案例閱讀', content: '中華電信改制行動。', q: '目的是為了訊號爛還是服務健康？' },
            { time: '7m', icon: 'fa-people-arrows', type: '角力分析', content: '各方關係平衡。', q: '老師罷工你第一反應是什麼？' },
            { time: '4m', icon: 'fa-lightbulb', type: '總結價值', content: '暫時的痛苦成本。', q: '值得嗎？' }
        ],
        quizzes: [
            { q: '罷工是什麼手段？', a: '最後手段（Last Resort）。' },
            { q: '期間雇主付薪嗎？', a: '無義務（無勞務無工資）。' },
            { q: '主要目的是？', a: '給予壓力，促使資方回到談判桌。' }
        ],
        flex: '對比感知落差。',
        summary: '罷工不是自私，是讓失衡巨輪運轉。'
    },
    {
        id: 20, type: 'collective', icon: 'fa-eye-slash', title: '別讓標籤抹黑罷工', subtitle: '標籤辨識媒體識讀',
        prep: '負面留言。',
        goal: '媒體識讀。',
        steps: [
            { time: '4m', icon: 'fa-mask-face', type: '標籤判讀', content: '網友噴「貪婪」。', q: '醫護為了品質而罷工，還貪婪嗎？' },
            { time: '7m', icon: 'fa-heart-circle-check', type: '結構面紗', content: '生命守護與環境的正向關。', q: '病患家屬想看見哪種護士？' },
            { time: '4m', icon: 'fa-hand-holding-hand', type: '同理演練', content: '寫下理性文字。', q: '你想讓大眾聽見你的哪句話？' }
        ],
        quizzes: [
            { q: '訴求常包含金錢外？', a: '安全、排班、防凌。' },
            { q: '媒體報導傾向？', a: '報導不便性而非核心原因。' },
            { q: '家屬角度看醫護品質？', a: '合理條件才確保病患安全。' }
        ],
        flex: '討論情勒阻礙社會進步。',
        summary: '剝去汙名，看見罷工背後守護。'
    },
    {
        id: 21, type: 'collective', icon: 'fa-list-check', title: '罷工不是想罷就罷的', subtitle: '嚴格法定程序',
        prep: '五關流程卡。',
        goal: '掌握法律尊重與限制。',
        steps: [
            { time: '3m', icon: 'fa-circle-exclamation', type: '破除迷思', content: '「大家明天算罷工囉」行嗎？', q: '害怕舉手反對嗎？' },
            { time: '8m', icon: 'fa-road-bridge', type: '五關卡', content: '協、調、大、票、同。', q: '為何不計名？' },
            { time: '4m', icon: 'fa-check-double', type: '情境模擬', content: '判斷哪關沒過導致不合規？', q: '漏洞的賠償風險。' }
        ],
        quizzes: [
            { q: '經會員大會什麼程序過半贊成？', a: '不記名投票。' },
            { q: '罷工前必須先經什麼程序？', a: '勞資爭議調解。' },
            { q: '法律何以嚴格程序？', a: '確保慎重決定並給談判最後機會。' }
        ],
        flex: '說明預告期用意。',
        summary: '程序之嚴，顯見罷工權利的慎重。'
    },
    {
        id: 22, type: 'collective', icon: 'fa-gavel', title: '公務員能罷工嗎？', subtitle: '罷工權界限與權衡',
        prep: '分類牌。',
        goal: '掌握職業限制。',
        steps: [
            { time: '3m', icon: 'fa-traffic-light', type: '身分挑戰', content: '教師、軍警、醫護限制。', q: '自來水員罷工一週生活變怎樣？' },
            { time: '8m', icon: 'fa-balance-scale', type: '價值權衡', content: '公眾生命優於權利。', q: '既然不能罷，改用什麼管道？' },
            { time: '4m', icon: 'fa-magnifying-glass-arrow-right', type: '替代之路', content: '遊行、仲裁。', q: '少數犠牲換多數安全？' }
        ],
        quizzes: [
            { q: '依法禁止身分？', a: '現役軍人。' },
            { q: '教師與公務員限制？', a: '依法大多禁止或極受限。' },
            { q: '補償機制？', a: '強制仲裁或特殊爭議程序。' }
        ],
        flex: '疫情期間醫護。',
        summary: '權利雖大不逾生命，關鍵職業服務受限有理。'
    },
    {
        id: 23, type: 'collective', icon: 'fa-users-viewfinder', title: '集體權益大會師', subtitle: '課程總複習與總結',
        prep: '總結回顧表。',
        goal: '鞏固集體勞動權益核心概念。',
        steps: [
            { time: '4m', icon: 'fa-layer-group', type: '架構回顧', content: '回顧工會、協約、罷工流程。', q: '這幾課下來，你覺得勞工最厲害的武器是什麼？' },
            { time: '7m', icon: 'fa-puzzle-piece', type: '拼圖遊戲', content: '將各權益拼成一個完整的圖資。', q: '缺少哪一塊，勞資關係會崩盤？' },
            { time: '4m', icon: 'fa-flag', type: '行動宣言', content: '如果你以後是勞工，你會想為職場做什麼？', q: '寫下一句你未來的職場承諾。' }
        ],
        quizzes: [
            { q: '勞資關係中，集體力量的三大支柱？', a: '工會（團結）、協商（契約）、罷工（行動）。' },
            { q: '對於團結權的保障，最核心的法令是？', a: '工會法及不當勞動行為裁決制度。' },
            { q: '如果你是一間公司的唯一勞工，要如何發揮集體力量？', a: '個人可加入外部職業工會或尋求產業代表團體支持。' }
        ],
        flex: '可與學生分享當地總工會的小禮物。',
        summary: '團結一致就是力量，權益保障一起來。'
    },
    {
        id: 24, type: 'collective', icon: 'fa-id-badge', title: '我是未來的公民', subtitle: '勞動尊嚴與公民素養',
        prep: '公民素養投影卡。',
        goal: '提升勞動尊嚴感與公民素養。',
        steps: [
            { time: '4m', icon: 'fa-id-badge', type: '自我認同', content: '討論勞動不僅是為了賺錢。', q: '你覺得一個勞工在社會上的角色是什麼？只有薪水重要嗎？' },
            { time: '7m', icon: 'fa-solid fa-heart-pulse', type: '勞動尊嚴', content: '尊重彼此的工作價值與勞動條件。', q: '如果你是客人，你如何展現對勞工的尊重？' },
            { time: '4m', icon: 'fa-solid fa-graduation-cap', type: '畢業宣誓', content: '宣布完成所有課程模組。', q: '你覺得這 24 課對你未來的打工生活有什麼實際幫助？' }
        ],
        quizzes: [
            { q: '提升勞動素養的主要目的是？', a: '保護自己、尊重他人、維護公平健康的勞動市場環境。' },
            { q: '當你看見不公平的勞資情境時，最好的公民行動是？', a: '了解事實、適時發聲或支持受害者、並透過官方法律管道處理。' },
            { q: '勞動尊嚴的基礎在於？', a: '相互尊重與遵守法律底線，不分職業高低。' }
        ],
        flex: '討論數位時代新型態。',
        summary: '掌握權益就是保護未來，我是勞動小公民。'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentFilter = 'all';

    function renderTiles(data) {
        grid.innerHTML = '';
        data.forEach((m, idx) => {
            const card = document.createElement('div');
            card.className = `card ${m.type}`;
            card.style.animationDelay = `${idx * 0.04}s`;
            card.innerHTML = `
                <div class="card-tag">${m.type === 'individual' ? '個體勞動' : '集體勞動'}</div>
                <div class="card-icon"><i class="fa-solid ${m.icon}"></i></div>
                <div class="card-title">${m.title}</div>
                <div class="card-desc">${m.subtitle}</div>
                <div class="card-footer">
                    <span class="time-badge">15 分鐘</span>
                    <span class="open-link"> 打開百寶箱 <i class="fa-solid fa-arrow-right-long"></i></span>
                </div>
            `;
            card.onclick = () => openModalBox(m);
            grid.appendChild(card);
        });
    }

    function openModalBox(m) {
        const stepsHTML = m.steps.map(s => {
            const quest = s.q || '（本步驟以知識引導為主，請老師總結重點）。';
            return `
                <div class="timeline-item">
                    <div class="tl-icon-circle"><i class="fa-solid ${s.icon}"></i></div>
                    <div class="tl-meta">${s.time} · ${s.type}</div>
                    <div class="tl-body">${s.content}</div>
                    <div class="key-question">${quest}</div>
                </div>
            `;
        }).join('');

        const quizzesHTML = (m.quizzes || []).map((q, i) => `
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <span style="font-size: 0.7rem; font-weight: 900; color: var(--accent); margin-bottom: 10px;">QUESTION 0${i+1}</span>
                        <p style="font-size: 1rem; font-weight: 800; color: var(--primary); margin: 0;">${q.q}</p>
                        <span class="flip-hint">點擊翻牌看解答</span>
                    </div>
                    <div class="flip-card-back">
                        <p style="font-size: 0.95rem; font-weight: 700; line-height: 1.5; margin: 0;">${q.a}</p>
                        <span style="margin-top: 12px; font-size: 0.7rem; font-weight: 700; opacity: 0.8;">點擊翻回問題</span>
                    </div>
                </div>
            </div>
        `).join('');

        modalBody.innerHTML = `
            <div style="margin-bottom: 30px;">
                <span style="font-weight: 900; color: ${m.type === 'individual' ? 'var(--individual)' : 'var(--collective)'}; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px;">
                    ${m.type === 'individual' ? 'Individual Labor' : 'Collective Labor'} Module
                </span>
                <h2 style="font-size: 2rem; font-weight: 900; margin: 8px 0; color: var(--primary);">${m.title}</h2>
                <p style="color: var(--text-muted); font-size: 1.1rem; margin-top: 0;">${m.subtitle}</p>
            </div>

            <div class="prep-banner">
                <i class="fa-solid fa-toolbox"></i>
                <div>
                    <span class="prep-title">課前準備箱：</span>
                    <span style="color: #444;">${m.prep || '無需特殊準備項目。'}</span>
                </div>
            </div>

            <button class="btn-copy" onclick="copyPlanSnippet('${m.title}')"><i class="fa-regular fa-copy"></i> 複製教案大綱</button>

            <div class="goal-section" style="border-left-color: ${m.type === 'individual' ? 'var(--individual)' : 'var(--collective)'}">
                <h3><i class="fa-solid fa-crosshairs"></i> 本課教學目標</h3>
                <p style="font-weight: 500; font-size: 1.1rem; color: var(--text-main); margin: 0;">${m.goal || '設定教學重點。'}</p>
            </div>

            <h3 style="display: flex; align-items: center; gap: 12px; margin-bottom: 40px; color: var(--primary); font-size: 1.3rem;">
                <i class="fa-solid fa-map-location-dot" style="color: var(--accent);"></i> 15 分鐘教學地圖
            </h3>

            <div class="timeline">${stepsHTML}</div>

            <div style="background: linear-gradient(135deg, #2f3542, #1e272e); padding: 30px; border-radius: 20px; color: white; text-align: center; margin-bottom: 60px;">
                <i class="fa-solid fa-puzzle-piece" style="color: #ffca28; margin-bottom: 12px; font-size: 1.5rem;"></i>
                <div style="font-size: 1.2rem; font-weight: 700;">重點收尾：${m.summary || '整理課程精華。'}</div>
            </div>

            <div class="quiz-section">
                <div class="quiz-title"><i class="fa-solid fa-lightbulb" style="color: #ffca28;"></i> 核心觀念檢核 (Concept Check)</div>
                <div class="quiz-grid">${quizzesHTML}</div>
            </div>

            <div class="flex-box">
                <h4><i class="fa-solid fa-wand-magic-sparkles"></i> 教學小撇步 (Flexibility)</h4>
                <p style="margin: 0; color: var(--text-muted); line-height: 1.6;">${m.flex || '老師可依課堂氣氛彈性調整。'}</p>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    window.closeModalBox = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    document.querySelector('.close-modal').onclick = closeModalBox;
    window.onclick = (e) => { if(e.target === modal) closeModalBox(); };

    filterBtns.forEach(b => {
        b.onclick = () => {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            b.classList.add('active');
            currentFilter = b.dataset.filter;
            applySearchAndFilter();
        };
    });

    searchInput.oninput = applySearchAndFilter;

    function applySearchAndFilter() {
        const query = searchInput.value.toLowerCase();
        const filtered = modulesData.filter(m => {
            const typeMatch = currentFilter === 'all' || m.type === currentFilter;
            const searchMatch = m.title.toLowerCase().includes(query) || (m.goal && m.goal.toLowerCase().includes(query)) || m.subtitle.toLowerCase().includes(query);
            return typeMatch && searchMatch;
        });
        renderTiles(filtered);
    }

    window.copyPlanSnippet = (title) => {
        const m = modulesData.find(x => x.title === title);
        const quizText = (m.quizzes || []).map((q, i) => `檢核 Q${i+1}：${q.q}\n解答 A${i+1}：${q.a}`).join('\n');
        const text = `【${m.title}】\n目標：${m.goal}\n準備：${m.prep}\n流程：\n${m.steps.map(s => `- [${s.time}] ${s.content} (提問：${s.q})`).join('\n')}\n--- 核心觀念檢核 ---\n${quizText}\n--- 總結 ---\n${m.summary}`;
        navigator.clipboard.writeText(text).then(() => alert('專業教案大綱已複製，包含 3 組互動問答，老師加油！'));
    };

    // Mascot Drag Logic
    const msc = document.getElementById('mascot');
    let isDragging = false;
    let startX, startY;
    let translateX = 0;
    let translateY = 0;

    msc.addEventListener('pointerdown', (e) => {
        isDragging = true;
        msc.setPointerCapture(e.pointerId);
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        msc.style.transition = 'none';
    });

    window.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        
        let newX = e.clientX - startX;
        let newY = e.clientY - startY;

        const rect = msc.getBoundingClientRect();
        
        // Clamp boundaries
        const minX = -30;
        const maxX = window.innerWidth - rect.width - 30;
        const minY = -window.innerHeight + rect.height + 30;
        const maxY = 30;

        translateX = Math.max(minX, Math.min(newX, maxX));
        translateY = Math.max(minY, Math.min(newY, maxY));
        
        msc.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });

    window.addEventListener('pointerup', () => {
        isDragging = false;
        msc.style.transition = 'transform 0.1s ease-out';
    });

    window.addEventListener('pointercancel', () => {
        isDragging = false;
    });

    renderTiles(modulesData);
});
