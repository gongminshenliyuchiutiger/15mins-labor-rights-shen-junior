const modulesData = [
    // 個體勞動 (Individual Labor) - 12 Modules
    {
        id: 1, type: 'individual', icon: 'fa-id-card', title: '我的第一份工作契約', subtitle: '勞動契約基礎知識',
        prep: '準備幾份常見的工讀契約範本供學生傳閱。',
        goal: '理解勞資共識即契約，並認清勞基法是最底線。',
        steps: [
            { time: '3m', icon: 'fa-handshake-simple', type: '情境破冰', content: '老闆說「明天來上班」，這句口頭承諾在法律上有用嗎？', q: '如果你沒簽紙本，老闆後來賴帳說沒請過你，你會怎麼證明你真的有在那上班？', a: '可以透過打卡紀錄、LINE對話截圖、排班表、薪資轉帳明細、甚至請同事作證來證明勞僱關係的存在。' },
            { time: '8m', icon: 'fa-file-lines', type: '核心圖解', content: '介紹契約三要素：當事人、勞務供給、薪資支付。強調「勞基法是地板」。', q: '如果合約寫「月薪 1 萬」（低於基本工資），但你自願簽名了，這份合約有效嗎？', a: '無效！勞基法是強制規定，任何低於勞基法標準的契約條款在法律上皆屬無效，會直接以勞基法標準取代。' },
            { time: '4m', icon: 'fa-circle-check', type: '實戰勾選', content: '拿出一份「陷阱合約」，請學生圈出三個違法的地方。', q: '看到「不足一小時不計薪」或「遲到一分扣一百」，你有勇氣跟老闆說不嗎？', a: '即使當下不敢說，也要知道這些條款違法（預扣工資）。可先收集證據（拍照或截圖），日後透過勞工局申訴追討。' }
        ],
        quizzes: [
            { q: '勞動契約一定要簽紙本才算成立嗎？', a: '不一定！只要雙方對工作內容與薪資達成口頭共識，契約即成立。' },
            { q: '如果契約內容低於勞基法的標準，該條款是否有效？', a: '無效！勞基法是最低保障，任何低於此標準的約定均屬無效。' },
            { q: '工讀生是否也享有勞基法的保障？', a: '是的。只要是受雇勞工，不論全職或兼職，皆受勞基法保護。' }
        ],
        flex: '**延伸話題：承攬與僱傭的差異**。可舉例如「外送平台」或「接案設計師」，說明承攬制的特點（不受打卡拘束但自己承擔風險且無勞保），教導學生辨識假承攬真僱傭，避免權益受損。',
        summary: '口頭也算數，法律保地板，簽名看清楚。'
    },
    {
        id: 2, type: 'individual', icon: 'fa-clock', title: '加班費怎麼算才不虧？', subtitle: '工時與加班規範',
        prep: '投影計算機介面。',
        goal: '掌握加班費計算邏輯（1.34、1.67），並確立「加班須同意」原則。',
        steps: [
            { time: '3m', icon: 'fa-battery-half', type: '壓力測試', content: '飲料店生意太好，店長要求你多留兩小時補貨。', q: '這多出來的兩小時，是用原本的時薪算，還是要加成？你覺得加多少才合理？', a: '依法必須加成。前兩小時要以原本時薪乘以至少 1.34 倍來計算才合法。' },
            { time: '7m', icon: 'fa-chart-column', type: '規則说明', content: '介紹前兩小時 1.34 倍，後兩小時 1.67 倍。', q: '為什麼加班費要給的比平常高？法律設計這個「倍率」是為了讓勞工多賺錢，還是為了讓老闆少叫人加班？', a: '主要是為了「以價制量」，提高雇主的人事成本，藉此遏止雇主隨意要求勞工加班，保護勞工的身心健康。' },
            { time: '5m', icon: 'fa-calculator', type: '速算挑戰', content: '時薪 180 元計算加班一小時領多少？', q: '如果老闆說「換成補休」可以嗎？如果換成補休，應該是 1:1 還是按倍率換？', a: '換補休必須經「勞工個人明確同意」，老闆不能片面規定。補休時數現行雖為 1:1，但勞資可協商比例。' }
        ],
        quizzes: [
            { q: '加班費前兩小時的法定計算倍率是多少？', a: '時薪乘以 1.34 倍。' },
            { q: '雇主可以規定「加班只能換補休」而拒付加班費嗎？', a: '不行。是否換補休由勞工自主決定，且應依勞工意願。' },
            { q: '每天正常工時加上加班，上限是多少小時？', a: '每日總計不得超過 12 小時。' }
        ],
        flex: '**破解「責任制」迷思**。許多行業常以「責任制」要求員工免費加班。教師可提醒：真正的合法責任制需經主管機關核准，一般打工或基層員工「即使事情沒做完被要求加班，依然要算加班費」。',
        summary: '前二 1.34，後二 1.67，換補休看我意願。'
    },
    {
        id: 3, type: 'individual', icon: 'fa-mask', title: '求職防騙「七不三要」', subtitle: '求職防禦力',
        prep: '假求職截圖、1955 專線、三要提醒卡。',
        goal: '提升辨識詐騙廣告的能力，學習求職自我保護。',
        steps: [
            { time: '3m', icon: 'fa-magnifying-glass', type: '找碴遊戲', content: '展示一張充滿誘餌的 LINE 徵才圖。', q: '這張廣告裡，哪三個地方讓你覺得「這工作太好賺了」？', a: '例如：「免經驗高薪」、「月入十萬包吃住」、「免面試直接錄取」、「只要會滑手機就能賺」等不合理的高報酬低門檻特徵。' },
            { time: '7m', icon: 'fa-user-shield', type: '防騙必殺技', content: '講解「七不」與「三要」：不繳錢、不購買、不辦卡、不簽約、證件不離身、不飲用不明飲料、不非法工作／要請家人或親友陪同面試或事先告知面試地點、要檢視應徵資訊屬實、要做好蒐集應徵公司資料。', q: '保留廣告截圖，這在發生糾紛時有什麼法律效用？', a: '廣告內容也被視為勞動契約的一部分，截圖可以作為雇主廣告不實或未履約的證據，保障自身權益。' },
            { time: '5m', icon: 'fa-hand-dots', type: '實戰模擬', content: '練習如何拒絕面試官「暫收提款卡」的要求。', q: '面試官說「提款卡要對帳」，你會怎麼用「要存疑」保護自己？', a: '可以堅定拒絕，說明「薪資轉帳只需要存摺影本，不需要提款卡與密碼」。如果對方強求，應立刻中止面試離開。' }
        ],
        quizzes: [
            { q: '求職防騙的「三要」原則包含哪些？', a: '要請家人或親友陪同面試或事先告知面試地點、要檢視應徵資訊屬實、要做好蒐集應徵公司資料。' },
            { q: '面試時老闆要求「保管身分證」，這違反了哪一項？', a: '違反「證件不離身」原則。' },
            { q: '如果發現求職廣告要求「先付保證金」，該怎麼辦？', a: '應立即停止應徵。七不原則之一就是「不繳錢」。' }
        ],
        flex: '**結合時事：打工詐騙與車手危機**。除了海外高薪詐騙，教師可特別強調「提供銀行帳戶、幫忙領錢（當車手）」的法律嚴重性，提醒學生切勿隨意交出存摺或提款卡，避免淪為詐欺共犯。',
        summary: '求職前多查、面試時帶人、三要七不記心頭。'
    },
    {
        id: 4, type: 'individual', icon: 'fa-sack-dollar', title: '試用期沒薪水對嗎？', subtitle: '基本工資保障',
        prep: '當年度最新工資數值投影。',
        goal: '確立「勞務供給必給薪」原則，認識基本工資。',
        steps: [
            { time: '3m', icon: 'fa-comments-dollar', type: '迷思破解', content: '老闆說「見習試做，沒錄取就不支薪喔」。', q: '這兩天的汗水，在法律上是可以被免費抹去的嗎？', a: '不可以。只要勞工有「受指揮監督提供勞務」的事實，雇主就必須給付不低於基本工資的薪資，沒有所謂「見習不給薪」。' },
            { time: '7m', icon: 'fa-coins', type: '法條掃描', content: '介紹時薪/月薪底線，強調不能隨意預扣薪資（如賠杯子）。', q: '如果月底發現被扣了「清潔費」導致低於基本工資，合法嗎？', a: '不合法。薪資未經勞工同意不得任意扣取，且任何情況下實領薪資都不能低於基本工資的底線。' },
            { time: '5m', icon: 'fa-calculator', type: '算算看', content: '計算 20 小時的應得最低薪資。', q: '如果領不到基本工資，你一個月會損失多少物資？', a: '（可請學生具體換算）例如少領 3000 元，等同於少買幾十杯手搖飲或幾個月的手機費，了解損失的痛感。' }
        ],
        quizzes: [
            { q: '雇主可以用「表現不佳」為由支領低於基本工資的薪水嗎？', a: '不行！基本工資是法定底線，任何理由都不得低於此數額。' },
            { q: '打工第一天在試用期，老闆可以不給這天的薪水嗎？', a: '不行！只要有提供勞務事實，雇主就必須支付薪資。' },
            { q: '如果打破杯子，老闆可以直接從薪水扣錢嗎？', a: '不行！雇主不得預扣勞工工資作為賠償費用。' }
        ],
        flex: '**延伸討論：實習生與建教合作**。教師可補充：若是「單純學習無勞務貢獻」可無薪，但若是「與一般員工做相同工作（如在飯店端盤子）」就是勞動，必須給薪。幫助學生建立正確觀念。',
        summary: '薪水底線法律定，試用期間也要錢。'
    },
    {
        id: 5, type: 'individual', icon: 'fa-umbrella', title: '工讀生也要勞保嗎？', subtitle: '社會保險保障',
        prep: '勞保投保表範本。',
        goal: '釐清勞保、就保與勞退對打工族的保障意義。',
        steps: [
            { time: '3m', icon: 'fa-file-invoice', type: '薪資單揭秘', content: '分析薪資單中的代扣保費項目。', q: '這筆錢每月被扣掉，你覺得它是「消費」還是「保險投資」？', a: '它是國家的社會保險，是用小錢分攤大風險的投資，能在受傷、失業或退休時提供重大保障。' },
            { time: '7m', icon: 'fa-piggy-bank', type: '架構說明', content: '勞保保險、勞退養老金（雇主提撥 6%）。', q: '老闆說「多給 1000 元，但不幫你投勞保」，你覺得划算嗎？', a: '絕對不划算。若發生職災、出車禍，少了勞保的傷病給付或失能補償，損失將是數十萬元起跳，遠超過那 1000 元。' },
            { time: '5m', icon: 'fa-mobile-screen', type: '查詢教學', content: '介紹如何查詢自己的勞退帳戶。', q: '你想過 40 年後，你的勞退帳號裡會有多少創業基金嗎？', a: '藉由雇主每月強制提撥 6%，這是一筆必定能領回的「強制儲蓄」，能保障未來的老年生活或運用。' }
        ],
        quizzes: [
            { q: '「勞退 6%」是從員工薪水裡扣的嗎？', a: '不是。這是雇主額外提撥到帳戶的。' },
            { q: '工讀生受感冒可以請病假嗎？', a: '可以。勞工請假規則同樣適用。' },
            { q: '勞保除了養老，還有什麼功能？', a: '包含生育、傷病、失能、死亡補償等。' }
        ],
        flex: '**實務提醒：第一天上班就要加保**。很多雇主會說「通過試用期再保」，這是違法的。教師可引導學生第一天就主動詢問，並教導使用 App 隨時查詢雇主是否有按時幫自己繳交勞就保與勞退。',
        summary: '打工權益按比例，提撥保險不可少。'
    },
    {
        id: 6, type: 'individual', icon: 'fa-hourglass-half', title: '工作幾小時要休息？', subtitle: '工時與休息間隔',
        prep: '排班表範本。',
        goal: '認識「工作4小時休30分鐘」與工時最高上限。',
        steps: [
            { time: '3m', icon: 'fa-person-running', type: '情境引入', content: '飲料店連續站 5 小時沒喝水。', q: '即使店長人很好，法律會允許他讓店員連做 6 小時不休息嗎？', a: '不允許。勞基法強制規定勞工每工作 4 小時必須至少有 30 分鐘的休息，這是為防止過勞的強制規範。' },
            { time: '7m', icon: 'fa-clock', type: '規則说明', content: '解說每 4 小時必休 30 分鐘，每日上限 8 小時。', q: '如果你是老闆，要怎麼安排 9 點到 18 點的休息才合法？', a: '可以在中午 12:00 或 13:00 安排 1 小時的休息，這樣前後段工作時間都不會超過 4 小時，即符合法律規定。' },
            { time: '5m', icon: 'fa-pencil', type: '找碴挑戰', content: '在違法班表中找出錯誤。', q: '這份瘋狂排班表中，哪一個時段最容易讓員工過勞？', a: '（引導學生看連續無休的區段，或日班緊接大夜班的「花花班」，引出休息時間不足的危險。）' }
        ],
        quizzes: [
            { q: '連續工作 4 小時後，必須有多少時間的休息？', a: '至少應有 30 分鐘的休息時間。' },
            { q: '休息時間，老闆可以叫我去接電話嗎？', a: '休息時間應是勞工自由支配。待命工作視為加班。' },
            { q: '每日正常工時的上限是多少小時？', a: '每日上限 8 小時，每週上限 40 小時。' }
        ],
        flex: '**進階觀念：什麼是「待命時間」？**。教師可帶入情境：「專櫃沒客人時在旁邊等，算休息還是工時？」只要不能自由離開現場、受指揮監督的狀態，都算「待命工時」，必須計薪且不算法定休息。',
        summary: '休息是為了安全，4 小時必休半小時。'
    },
    {
        id: 7, type: 'individual', icon: 'fa-calendar-check', title: '一週到底休幾天？', subtitle: '一例一休規則',
        prep: '一週日曆卡。',
        goal: '區分「例假」與「休息日」，了解週休二日。',
        steps: [
            { time: '3m', icon: 'fa-calendar-day', type: '連上 7 天', content: '老闆要求你連上 12 天。', q: '你覺得一個人連續工作兩週不休息，對身心會有什麼影響？', a: '會導致注意力下降、焦慮、免疫力降低，大幅增加職災與過勞死的風險，嚴重損害健康。' },
            { time: '8m', icon: 'fa-layer-group', type: '核心圖解', content: '區分例假（禁加班）與休息日（可加班且錢多）。', q: '老闆在「例假日」給雙倍錢叫你回來，合法嗎？', a: '不合法。除非是遇到天災、事變或突發事件，否則「例假日」嚴禁加班，就算勞工自己答應也不行。' },
            { time: '4m', icon: 'fa-hand-holding-heart', type: '福利討論', content: '討論法律為何限制例假不能隨便換錢。', q: '如果大家只想要錢而不休假，社會醫療成本會上升嗎？', a: '會的。短期看雖然個人賺到錢，但長期過勞引發的疾病會讓健保支出暴增，反而是全社會共同承擔代價。' }
        ],
        quizzes: [
            { q: '勞工每 7 日應有多少天的休息作為例假？', a: '至少應有 1 天作為例假。' },
            { q: '「休息日」加班跟「例假日」加班有什麼差別？', a: '休息日需付較高加班費；例假除非極端情況否則禁止加班。' },
            { q: '雇主可以要求勞工連上 7 天班而不給例假嗎？', a: '不行。原則上勞工不得連續工作超過 6 天。' }
        ],
        flex: '**深入探討：補休期限與權益**。教師可延伸說明，如果勞工選擇將加班費換成補休，補休是有期限的。如果到期依然沒休完，雇主『必須依法折算回原本的加班費發給』，絕對不能以此自動註銷歸零。',
        summary: ' 7 天要有 2 休，例假絕不能挪。'
    },
    {
        id: 8, type: 'individual', icon: 'fa-shield-heart', title: '職場安全「三要」與職災', subtitle: '職場防護與補償',
        prep: '現場危險圖、三要防禦卡。',
        goal: '學習安全「三要」原則，並理解職災補償。',
        steps: [
            { time: '3m', icon: 'fa-truck-medical', type: '緊急情境', content: '外送車禍或機器受傷的第一時間處理。', q: '事故發生時，法律如何保護第一現場？打給誰最有用？', a: '應通報主管、立刻報警（車禍），撥打 119 或 1955 諮詢，並務必保留現場證據以利後續職災認定。' },
            { time: '7m', icon: 'fa-user-shield', type: '安全三要', content: '講解「要通報、要拒絕、要離開」三原則。', q: '老闆要求在沒防護下爬高，你敢用「要拒絕」保護自己嗎？', a: '生命只有一次。遇到明顯有立即危險的工作，勞工有「退避權」，可以合法拒絕作業，且雇主不能以此處罰勞工。' },
            { time: '5m', icon: 'fa-phone-volume', type: '職災三步', content: '補償醫療與原領工資，定義通勤職災。', q: '外送車禍算職災嗎？如果沒加保，老闆還是得賠嗎？', a: '上下班合理路線出車禍算「通勤職災」。就算雇主違法沒投保，雇主依然要負擔勞基法上的職災補償全額責任。' }
        ],
        quizzes: [
            { q: '職場安全「三要」原則是什麼？', a: '「要通報」主管/1955、「要拒絕」危險工作、「要離開」危險現場。' },
            { q: '上班途中意外（含外送）算職災嗎？', a: '算。這屬於「通勤職災」保障範圍。' },
            { q: '職災醫療期間，老闆可以開除勞工嗎？', a: '不行。法律禁止在此期間終止勞動契約。' }
        ],
        flex: '**生活情境：颱風天與退避權**。教師可利用極端氣候外送員冒險送餐的新聞，討論「退避權」。強調當生命受立即危險時，勞工有絕對權利停止工作退避到安全場所，雇主不可扣薪或解僱。',
        summary: '安全三要保性命，工傷意外雇主賠。'
    },
    {
        id: 9, type: 'individual', icon: 'fa-gavel', title: '遇到慣老闆找誰助？', subtitle: '權利救濟管道',
        prep: '1955 專線圖案。',
        goal: '學習基礎蒐證方法與 1955 諮詢。',
        steps: [
            { time: '3m', icon: 'fa-user-pen', type: '受屈情境', content: '老闆無故扣薪且惡言相向。', q: '生氣時，第一步是吵架還是拍照存證？', a: '第一步絕對是冷靜並「拍照/截圖存證」。沒有證據的吵架只會成口舌之爭，證據才是尋求法律救濟的基礎。' },
            { time: '7m', icon: 'fa-camera-rotate', type: '蒐證重點', content: 'LINE 對話、打卡紀錄、薪單。', q: '沒紙本合約，LINE 說好要上班能當證據嗎？', a: '可以。LINE對話、Email或錄音，只要能顯示雙方對「聘僱與薪資」有共識的紀錄，在法律上都具備證據力。' },
            { time: '5m', icon: 'fa-headset', type: '求救演練', content: '模擬 1955 撥打詢問糾紛。', q: '你敢撥打 1955 嗎？它是匿名的嗎？', a: '可以放心打。1955 是政府免費專線，提供諮詢且可匿名了解自身權益，了解勝算後再決定是否提出正式申訴。' }
        ],
        quizzes: [
            { q: '勞資爭議的免費諮詢專線是多少？', a: '1955 勞工諮詢申訴專線。' },
            { q: '蒐證中，哪些是「薪資證明」？', a: '薪資條、存摺紀錄、對話細節。' },
            { q: '離職後發現少繳勞保還能檢舉嗎？', a: '可以。權利追溯不因離職結束。' }
        ],
        flex: '**法律實務：調解機制的運作**。教導學生撥打1955申訴後，最常進入「勞資爭議調解」。教師可鼓勵學生不要害怕出席調解會，備齊證據（對話、班表），在官方陪同下能有效促使雇主妥協。',
        summary: ' 1955 有求必應，證據第一心不驚。'
    },
    {
        id: 10, type: 'individual', icon: 'fa-venus-mars', title: '職場也要男女平等', subtitle: '性別平等與防護',
        prep: '性平法重點圖卡。',
        goal: '認識性別工作平等法，遠離職場性騷擾。',
        steps: [
            { time: '3m', icon: 'fa-scale-balanced', type: '薪資平等', content: '同樣工作，男生女生領得錢不一樣，對嗎？', q: '為什麼歷史上有「同工不同酬」的歪風？這種事情現在還能存在嗎？', a: '過去受性別刻板印象影響。現在有《性別平等工作法》保護，雇主對受僱者薪資之給付，不得因性別而有差別待遇。' },
            { time: '8m', icon: 'fa-shield-halved', type: '拒絕騷擾', content: '老闆開不舒服的笑話，甚至有肢體碰觸。', q: '如果你感覺「不舒服」，那算是騷擾嗎？你該忍耐還是大聲說不？', a: '只要當事人覺得不受歡迎且與性別有關，就可能構成性騷擾。絕不要忍耐，要明確說不，並向雇主或勞工局申訴。' },
            { time: '4m', icon: 'fa-handcuffs', type: '法律防線', content: '介紹申訴流程：向公司申訴、向勞工局申訴。', q: '如果你檢舉性騷擾，老闆反而開除你，這樣合法嗎？', a: '絕對違法。《性別平等工作法》規定雇主不得因受僱者提出申訴而予以解僱、調職或其他不利之處分。' }
        ],
        quizzes: [
            { q: '職場性騷擾發生時，雇主有什麼責任？', a: '雇主應採取防治措施，並在事件發生後立即有效處理。' },
            { q: '法律是否保障勞工不因性別而有不同的薪資待遇？', a: '是。性別工作平等法規定「同工同酬」原則。' },
            { q: '遇到性騷擾時可以向哪裡尋求外部協助？', a: '各縣市政府勞工局或撥打 1955 專線。' }
        ],
        flex: '**性平權益：產假、生理假與陪產假**。教師可補充：不只有女性有產假生理假；男性也有「陪產假」。這不僅保護女性健康，更是鼓勵男性共同分擔家庭育兒責任，打破傳統性別分工刻板印象。',
        summary: '性別平等大步走，職場尊重最重要。'
    },
    {
        id: 11, type: 'individual', icon: 'fa-suitcase-rolling', title: '我的特休在哪裡？', subtitle: '特別休假權益',
        prep: '特休天數對照表。',
        goal: '學會計算特休天數，掌握排定權。',
        steps: [
            { time: '3m', icon: 'fa-plane', type: '休假計畫', content: '工作半年，我想請假去日本玩，老闆可以擋嗎？', q: '你覺得工作多久應該要有一次「充電假期」？這錢要扣薪嗎？', a: '法律保障工作滿半年有 3 天特休，滿一年有 7 天。特休是「有薪假」，雇主必須照給當日工資，絕對不能扣薪。' },
            { time: '8m', icon: 'fa-calendar-days', type: '天數詳解', content: '工作半年 3 天，一年 7 天，類推。強調「自主排定權」。', q: '如果老闆說「特休由我來排」，這對嗎？法律是誰在決定假期的？', a: '不對。特休的「排定權」屬於勞工。除非雇主有企業經營上之「急迫需求」且經勞工同意，否則無權強迫排定。' },
            { time: '4m', icon: 'fa-hand-holding-dollar', type: '沒休完怎麼辦', content: '年底沒休完的特休必須換成薪水。', q: '如果你不想休假，想換成錢，這合約可以事先寫死嗎？', a: '不行事先約定「拋棄特休換錢」。但若是年度終結或契約終止「來不及休完」的日數，雇主依法就必須折算工資發給。' }
        ],
        quizzes: [
            { q: '工作滿半年，法定特休天數是多少？', a: '3 天。' },
            { q: '特休的「排定權」歸屬誰？', a: '歸勞工。除非雇主有急迫經營需要，否則不得干涉。' },
            { q: '年底特休沒休完，雇主必須？', a: '必須發給工資作為補償（換薪）。' }
        ],
        flex: '**觀念澄清：誰決定何時休假？** 許多公司有「休假黑名單」。教師可引導討論：雖然特休排定權在勞工，但勞資應誠信溝通。真遇緊急狀況雇主必須協商而非片面禁休，並提醒學生記錄自己年資以掌握特休。',
        summary: '年資累積假變多，休假排定我作主。'
    },
    {
        id: 12, type: 'individual', icon: 'fa-user-secret', title: '老闆能看我的 LINE 嗎？', subtitle: '職場隱私與通訊',
        prep: '隱私侵權案例摘要。',
        goal: '建立職場隱私邊界觀點，學習通訊自我保護。',
        steps: [
            { time: '4m', icon: 'fa-mobile-vibration', type: '通訊檢查', content: '老闆要求你交出手機查閱與同事的群組紀錄。', q: '你的手機是公司的財產還是個人的？老闆有權要求「公開透明」嗎？', a: '手機是個人財產與隱私。除非有法律明文授權或涉及重大刑事案件，否則雇主無權隨意檢查員工私人通訊設備。' },
            { time: '7m', icon: 'fa-eye-slash', type: '隱私界限', content: '介紹監視器只能用於防盜安全，不可作為監視員工細節工具。', q: '如果在每一張辦公桌前面都裝一個監視器盯著你，你會覺得這是安全還是監視？', a: '這是過度監控。監視器裝設須符合「比例原則」，如用於公共安全防盜，不能針對單一員工座位進行不中斷的監看。' },
            { time: '4m', icon: 'fa-comment-slash', type: '下班靜音', content: '下班後老闆一直傳 LINE 交辦工作，這算加班嗎？', q: '如果你「已讀」並「回覆」老闆的工作，這 5 分鐘算不算勞動？', a: '算！只要有受雇主指揮監督「提供勞務」處理公事的事實，就應計入工時，並可依法請求發給加班費。' }
        ],
        quizzes: [
            { q: '雇主可以直接查閱員工的私人手機通訊內容嗎？', a: '原则上不行。這涉及個人隱私，除非法律另有授權或約定。' },
            { q: '下班後雇主透過通訊軟體交辦工作，可否申報加班？', a: '可以。只要有執行勞務（如回覆公務、整理資料）之事實。' },
            { q: '監視器錄影主要應作為什麼目的使用？', a: '安全防備、防竊或管理必要。不得純粹用於監視勞工私人舉止。' }
        ],
        flex: '**數位素養：「下班後斷線權」**。除了下班回 LINE 算加班，也可討論國際漸夯的「離線權 (Right to Disconnect)」。引導思考過度連結對心理健康的影響，並建議離職時如何得體且俐落地退出公司群組。',
        summary: '隱私界限要守住，下班通訊算加班。'
    },

    // 集體勞動 (Collective Labor) - 12 Modules
    {
        id: 13, type: 'collective', icon: 'fa-users', title: '為什麼單打獨鬥沒用？', subtitle: '勞資權力不對等',
        prep: '一張椅子與十張椅子的對比感。',
        goal: '認同集體發聲的必要。',
        steps: [
            { time: '4m', icon: 'fa-scale-unbalanced', type: '秤秤看', content: '如果你覺得決定不公，一個人提 vs 全班連署，校長聽誰的？', q: '面對強大企業，一個人說話真的有份量嗎？', a: '一個人很容易被公司忽視。勞資雙方資源極度不對等，資方掌握飯碗，個人的力量很難與企業組織對抗。' },
            { time: '7m', icon: 'fa-people-group', type: '團結意義', content: '工會原理：平衡雙方資源與談判籌碼。', q: '為什麼團結一致，老闆就不敢隨便「殺一儆百」？', a: '當多數員工團結，開除或處罰可能引發全體反彈或停工，造成的營業損失遠大於讓步，資方就必須妥協談判。' },
            { time: '4m', icon: 'fa-hand-peace', type: '共感思考', content: '什麼情況下你願意支持同事？', q: '「冷眼旁觀」與「並肩作戰」，哪個更能改變職場？', a: '冷眼旁觀會讓資方各個擊破；並肩作戰才能集結籌碼，促實質力量對等，真正改善勞動條件。' }
        ],
        quizzes: [
            { q: '為什麼法律鼓勵員工組成「工會」？', a: '因單一勞工極度弱勢，集結才能公平談判。' },
            { q: '什麼是「集體協商」？', a: '透過工會代表，針對勞務條款進行談判。' },
            { q: '無工會下，天秤會傾向哪方？', a: '強烈傾向資方，因掌握生存資源。' }
        ],
        flex: '**歷史借鏡：工運簡史與八小時工作制**。可分享「51勞動節」的由來是為了爭取每日工作八小時。讓學生知道現在的週休二日、加班費，都不是天上掉下來的，而是無數勞工透過集體力量爭取而來的成果。',
        summary: '單箭易折，萬箭難撼。集體發聲才有對等。'
    },
    {
        id: 14, type: 'collective', icon: 'fa-shield-heart', title: '組隊打怪不犯法！', subtitle: '憲法結社權',
        prep: '憲法第 14 條條文。',
        goal: '確認組工會權力受憲法保障。',
        steps: [
            { time: '3m', icon: 'fa-scroll', type: '憲法力量', content: '解說憲法「結社自由」意義。', q: '老闆說「簽約就不能參加工會」，這合約有用嗎？', a: '無效。這被稱為「黃狗契約」，因為違反了憲法結社自由與工會法保障，這項條款在法律上視為無效。' },
            { time: '7m', icon: 'fa-ban', type: '不當勞動', content: '打壓工會屬違法，可受罰。', q: '發獎金給「不參加工會」的人算什麼行為？', a: '這構成「不當勞動行為」（打壓工會）。雇主不能用利益利誘或不當手段來影響員工參與工會的意願。' },
            { time: '5m', icon: 'fa-gavel', type: '判斷真偽', content: '判斷哪些是老闆的犯規行為案例。', q: '法官判斷犯規時，最看重什麼？', a: '裁決委員最看重雇主的行為是否帶有「支配介入工會運作」或「對工會會員有不利益待遇」的意圖與客觀事實。' }
        ],
        quizzes: [
            { q: '雇主可以「參加工會」為由解僱員工嗎？', a: '不行！這屬不當勞動行為，依法處分。' },
            { q: '憲法保障勞工的哪項權力？', a: '結社自由（結社權）。' },
            { q: '發生不當打壓可向哪申請救濟？', a: '勞動部不當勞動行為裁決委員會。' }
        ],
        flex: '**反制利器：不當勞動行為裁決**。當雇主打壓工會，去法院打官司會拖很久。教師可介紹「勞動部不當勞動行為裁決委員會」，這是一個能快速審理並具有強制力的行政救濟管道，是保護工會的超級防護罩。',
        summary: '工會是合法組隊，資方干預必違法。'
    },
    {
        id: 15, type: 'collective', icon: 'fa-handshake', title: '工會都在做什麼？', subtitle: '多元服務角色',
        prep: '各式工會活動照片。',
        goal: '破除對工會的刻板印象。',
        steps: [
            { time: '4m', icon: 'fa-comments', type: '印象檢視', content: '工會只會抗議嗎？', q: '除了抗爭一無所有的工會，員工會想參加嗎？', a: '這會讓人產生距離感。現代工會平時應提供法律諮詢、代辦勞健保、教育訓練、爭取福利等，才能凝聚向心力。' },
            { time: '7m', icon: 'fa-gears', type: '功能盤點', content: '福利爭取、橋樑、諮調、勞安。', q: '除了加薪，你想讓工會幫你談什麼？', a: '（引導多元思考）例如：彈性上下班、增加全薪病假天數、改善休息室設備、健康檢查補助或是育兒津貼。' },
            { time: '4m', icon: 'fa-tags', type: '類型辨識', content: '認識企業工會與職業工會區別。', q: '選對適合自己的職類工會。', a: '（引導應用）沒有企業工會時，髮型師可加入美髮業職業工會，護理師可加入醫護產業工會，皆能獲得專業協助。' }
        ],
        quizzes: [
            { q: '現代工會除了抗爭外還有哪些功能？', a: '福利、溝通、法律、勞安、專業訓練。' },
            { q: '為什麼工會要辦理教育訓練？', a: '提升技術、就業保障、建立網絡。' },
            { q: '遇到糾紛，工會能提什麼幫助？', a: '法律諮詢、陪同調解、集體救濟。' }
        ],
        flex: '**扭轉刻板印象：工會的「日常服務」**。教師可補充工會的溫馨事蹟：如爭取增設托嬰中心、好的健檢方案、或替會員急難救助。工會不只有抗議的強硬面，更有作為「勞工第二個家」的溫暖支持系統。',
        summary: '工會是日常後盾，更是勞資溝通的最佳翻譯。'
    },
    {
        id: 16, type: 'collective', icon: 'fa-chart-pie', title: '公司賺錢怎麼分？', subtitle: '集體協約威力',
        prep: '圓餅圖圖標（年終、特別假）。',
        goal: '理解團體協約優於勞基法。',
        steps: [
            { time: '3m', icon: 'fa-cake-candles', type: '利潤分配', content: '大賺錢時誰去談獎金？', q: '老闆說「不保證明年賺」，你一個人怎麼回？', a: '個人很難反駁。但工會可以要求公司依法提供財會數據，證明確實有盈餘，並啟動集體協商要求分配。' },
            { time: '7m', icon: 'fa-file-contract', type: '契約概念', content: '團體協約：工會談下來的權利，沒簽了就得做。', q: '集體簽 vs 個人簽在法律地位上不同。', a: '（知識補充）團體協約具有「規範效力」，位階高於個人勞資合約，雇主不能私下找員工簽訂低於協約標準的條件。' },
            { time: '5m', icon: 'fa-hand-holding-dollar', type: '願望清單', content: '最想爭取的協約項目？', q: '下午茶 or 健檢？', a: '（讓學生思考取捨）工會協商要整合會員不同年齡層的需求，尋求大家都能接受的「最大公約數」福利方案。' }
        ],
        quizzes: [
            { q: '內容通常優於勞基法的書面契約稱為？', a: '團體協約。' },
            { q: '違反協約工會可怎麼做？', a: '要求履行、申請裁決或訴訟。' },
            { q: '協約包含哪些非薪資內容？', a: '特休、育兒津貼、環境改善。' }
        ],
        flex: '**組織分辨：福委會 ≠ 工會**。教師需釐清：公司可能有「職工福利委員會」，會辦尾牙發獎金，但這不是工會！其資金有部分是員工薪水扣的，且無權爭取加薪。唯有工會才具有合法的集體談判權。',
        summary: '團結力量談協約，福利保障遠超勞基法。'
    },
    {
        id: 17, type: 'collective', icon: 'fa-comments', title: '坐下來好好談：勞資會議', subtitle: '法定協商平台',
        prep: '會議示意圖。',
        goal: '認識勞資會議的制度。',
        steps: [
            { time: '3m', icon: 'fa-users-rectangle', type: '制度簡介', content: '法規要求定期召開對等會議。', q: '代表數量對等的含意？', a: '確保談判桌上的發言與表決權力平等，資方代表人數不能多於勞方代表，避免決議被資方用人數優勢單方面強行通過。' },
            { time: '8m', icon: 'fa-table-list', type: '議題探討', content: '排班、服裝、工作環境。', q: '非金錢事項討論的意義？', a: '工作環境如通風、制服樣式、排班規則等，都直接影響員工的日常尊嚴與感受，需要常態性的發聲管道。' },
            { time: '4m', icon: 'fa-person-chalkboard', type: '模擬推選', content: '體會代表民意的榮譽感。', q: '冷靜提案 or 大吼？', a: '大吼只能宣洩；冷靜收集同事意見、準備好數據與具體解決方案（提案）在會議上討論，才能真正促成分解問題。' }
        ],
        quizzes: [
            { q: '勞資代表的人數配置應？', a: '對等（人數相等）。' },
            { q: '通常多久應舉辦一次？', a: '至少每三個月一次。' },
            { q: '決議對公司有強制力嗎？', a: '具勞資合議性質，公司應落實。' }
        ],
        flex: '**危機防禦：無薪假與裁員的煞車皮**。公司若遇不景氣想實施無薪假或大量解僱，依法都必須事先送交「勞資會議」協商討論。它能在最壞情況發生前，提供勞工談判遣散費或爭取優退方案的緩衝空間。',
        summary: '勞資會議常態開，日常小事不變大糾紛。'
    },
    {
        id: 18, type: 'collective', icon: 'fa-tower-broadcast', title: '力量不夠？打電話找隊友', subtitle: '跨公司工會資源',
        prep: '工會 Logo。',
        goal: '知道可加入外部工會獲援。',
        steps: [
            { time: '4m', icon: 'fa-network-wired', type: '孤身奮戰', content: '小店員工糾紛。', q: '人數不足組工會（不足30人）怎麼辦？', a: '台灣法律規定30人才能組企業工會。若不足，可以加入其所屬行業類別的「職業工會」或「產業工會」獲得保護。' },
            { time: '7m', icon: 'fa-satellite-dish', type: '資源跨接', content: '職業/產業工會可跨公司。', q: '對職涯發展有何幫助？', a: '職業工會常舉辦專業技能培訓（如勞動部補助課程），能幫助你提升專業技能、考取證照，並擴展業界人脈。' },
            { time: '4m', icon: 'fa-map-location-dot', type: '地圖尋寶', content: '查找住家附近據點。', q: '工會像各項體育協會一樣專業！', a: '（比喻）就如同職棒球員工會，背後有專業的法律顧問與談判專家，讓勞工遇到糾紛時不用孤軍奮戰。' }
        ],
        quizzes: [
            { q: '人數不滿 30 人可如何爭權？', a: '加入相關職業工會或產業工會。' },
            { q: '企業工會 vs 產業工會？', a: '企業限同司；產業跨同類。' },
            { q: '全台最高調解單位？', a: '各縣市政府勞工局。' }
        ],
        flex: '**新興趨勢：零工經濟與外送員產業工會**。以外送員為例，雖無固定雇主，但仍成立了「全國外送產業工會」。引導說明：新型態自由接案者，一樣能跨區籌組產業或職業工會，與巨大平台企業相抗衡。',
        summary: '不必獨自扛，前輩都是靠山。'
    },
    {
        id: 19, type: 'collective', icon: 'fa-bullhorn', title: '權利與代價：看見罷工', subtitle: '抗爭實例反思',
        prep: '罷工片段。',
        goal: '透過案例反思。',
        steps: [
            { time: '4m', icon: 'fa-newspaper', type: '案例閱讀', content: '中華電信改制行動。', q: '目的是為了訊號爛還是服務健康？', a: '罷工表面上看是爭取員工權益，但常是為了抗議人力不足導致的過勞，最終反而是為了維護長遠的服務品質或安全。' },
            { time: '7m', icon: 'fa-people-arrows', type: '角力分析', content: '各方關係平衡。', q: '老師罷工你第一反應是什麼？', a: '（引導同理心）可能是覺得放假開心，但也應思考：如果老師一直處於過勞或不合理待遇中，教育品質會好嗎？' },
            { time: '4m', icon: 'fa-lightbulb', type: '總結價值', content: '暫時的痛苦成本。', q: '值得嗎？', a: '罷工期間勞工不支薪還需背負社會壓力。但如果不罷工，剝削就會成為常態。這是一陣痛以換取長治久安的艱難選擇。' }
        ],
        quizzes: [
            { q: '罷工是什麼手段？', a: '最後手段（Last Resort）。' },
            { q: '期間雇主付薪嗎？', a: '無義務（無勞務無工資）。' },
            { q: '主要目的是？', a: '給予壓力，促使資方回到談判桌。' }
        ],
        flex: '**社會同理：罷工的「外部成本」與「長遠利益」**。罷工一定會造成大眾不便。教師可拋問：「我們該為了今天的方便，而忽視他們長期受剝削嗎？」引導跳脫「消費者本位」，以「公民視角」理解罷工。',
        summary: '罷工不是自私，是讓失衡巨輪運轉。'
    },
    {
        id: 20, type: 'collective', icon: 'fa-eye-slash', title: '別讓標籤抹黑罷工', subtitle: '標籤辨識媒體識讀',
        prep: '負面留言。',
        goal: '媒體識讀。',
        steps: [
            { time: '4m', icon: 'fa-mask-face', type: '標籤判讀', content: '網友噴「貪婪」。', q: '醫護為了品質而罷工，還貪婪嗎？', a: '不貪婪。要求合理的人力與護病比，是為了確保病患安全、降低出錯率，絕不只是單純為了爭取個人加薪。' },
            { time: '7m', icon: 'fa-heart-circle-check', type: '結構面紗', content: '生命守護與環境的正向關。', q: '病患家屬想看見哪種護士？', a: '想看見精神飽滿、能專注照顧病人的護理師；而不是連上大夜班、疲憊不堪、可能給錯藥的過勞護理師。' },
            { time: '4m', icon: 'fa-hand-holding-hand', type: '同理演練', content: '寫下理性文字。', q: '你想讓大眾聽見你的哪句話？', a: '（同理寫作）例如：「罷工是為了守護更好的醫療品質」、「我們不是不愛病人，是這體系讓我們撐不下去」。' }
        ],
        quizzes: [
            { q: '訴求常包含金錢外？', a: '安全、排班、防凌。' },
            { q: '媒體報導傾向？', a: '報導不便性而非核心原因。' },
            { q: '家屬角度看醫護品質？', a: '合理條件才確保病患安全。' }
        ],
        flex: '**媒體識讀：拒絕罷工的「情緒勒索」**。媒體常將罷工塑造成「影響權益」的負面標籤。教師應帶領學生尋找工會官方聲明與真實訴求，分辨帶風向言論，培養不隨風起舞的獨立思考能力。',
        summary: '剝去汙名，看見罷工背後守護。'
    },
    {
        id: 21, type: 'collective', icon: 'fa-list-check', title: '罷工不是想罷就罷的', subtitle: '嚴格法定程序',
        prep: '五關流程卡。',
        goal: '掌握法律尊重與限制。',
        steps: [
            { time: '3m', icon: 'fa-circle-exclamation', type: '破除迷思', content: '「大家明天算罷工囉」行嗎？', q: '害怕舉手反對嗎？', a: '在公開場合表態會有壓力，因此法律規定罷工前必須經過工會大會「不記名投票」過半數同意。' },
            { time: '8m', icon: 'fa-road-bridge', type: '五關卡', content: '協、調、大、票、同。', q: '為何不計名？', a: '防止資方事後秋後算帳，也防止內部互相施壓。確保罷工的決議是基於多數會員不受干擾的自由意志。' },
            { time: '4m', icon: 'fa-check-double', type: '情境模擬', content: '判斷哪關沒過導致不合規？', q: '漏洞的賠償風險。', a: '如果不按法定程序（如未經調解、未投票），將構成「違法罷工」，參與者不僅會被懲處，工會還可能要賠償公司損失。' }
        ],
        quizzes: [
            { q: '經會員大會什麼程序過半贊成？', a: '不記名投票。' },
            { q: '罷工前必須先經什麼程序？', a: '勞資爭議調解。' },
            { q: '法律何以嚴格程序？', a: '確保慎重決定並給談判最後機會。' }
        ],
        flex: '**時事案例探討：罷工預告期**。社會常有要求設立「罷工預告期」的聲音。教師可引導兩面思考：預告期讓旅客應變；但若過長資方就能提前調度，使罷工失去施壓效果。帶領學生在公眾利益與罷工武器間尋找平衡。',
        summary: '程序之嚴，顯見罷工權利的慎重。'
    },
    {
        id: 22, type: 'collective', icon: 'fa-gavel', title: '公務員能罷工嗎？', subtitle: '罷工權界限與權衡',
        prep: '分類牌。',
        goal: '掌握職業限制。',
        steps: [
            { time: '3m', icon: 'fa-traffic-light', type: '身分挑戰', content: '教師、軍警、醫護限制。', q: '自來水員罷工一週生活變怎樣？', a: '社會將面臨嚴重的公衛與生存危機。因此這類涉及國家安全與重大民生基礎設施的職業，其罷工權會依法受到嚴格限制。' },
            { time: '8m', icon: 'fa-balance-scale', type: '價值權衡', content: '公眾生命優於權利。', q: '既然不能罷，改用什麼管道？', a: '法律有提供相對應的機制，例如交由特定權責機關進行「強制仲裁」，以公權力介入直接裁定勞資爭議。' },
            { time: '4m', icon: 'fa-magnifying-glass-arrow-right', type: '替代之路', content: '遊行、仲裁。', q: '少數犠牲換多數安全？', a: '公共利益凌駕於少數集體權利是法律上的權衡。但也因此，國家更有責任保障這些受限職業人員擁有合理的待遇與尊嚴。' }
        ],
        quizzes: [
            { q: '依法禁止身分？', a: '現役軍人。' },
            { q: '教師與公務員限制？', a: '依法大多禁止或極受限。' },
            { q: '補償機制？', a: '強制仲裁或特殊爭議程序。' }
        ],
        flex: '**極端情境挑戰：疫情下的醫護權益**。舉 COVID-19 疫情為例：醫護面對高感染風險與高強度工時，卻因職業倫理與法律限制禁止罷工。引導探討國家與社會是否有給予相對應的「機制補償與危險津貼」。',
        summary: '權利雖大不逾生命，關鍵職業服務受限有理。'
    },
    {
        id: 23, type: 'collective', icon: 'fa-users-viewfinder', title: '集體權益大會師', subtitle: '課程總複習與總結',
        prep: '總結回顧表。',
        goal: '鞏固集體勞動權益核心概念。',
        steps: [
            { time: '4m', icon: 'fa-layer-group', type: '架構回顧', content: '回顧工會、協約、罷工流程。', q: '這幾課下來，你覺得勞工最厲害的武器是什麼？', a: '「團結」。個人的權利只是底線，唯有透過工會（團結）、協約（協商）到罷工（爭議行為），才是與資方抗衡的真正武器。' },
            { time: '7m', icon: 'fa-puzzle-piece', type: '拼圖遊戲', content: '將各權益拼成一個完整的圖資。', q: '缺少哪一塊，勞資關係會崩盤？', a: '缺少「良好溝通與對等協商」。資方專斷或勞工無處發聲的極端，都會導致勞資關係惡化甚至引發激烈衝突。' },
            { time: '4m', icon: 'fa-flag', type: '行動宣言', content: '如果你以後是勞工，你會想為職場做什麼？', q: '寫下一句你未來的職場承諾。', a: '（鼓勵實作）例如：「我絕不簽違法合約」、「遇到危險我會勇敢拒絕」、「未來我會支持並考慮加入工會」。' }
        ],
        quizzes: [
            { q: '勞資關係中，集體力量的三大支柱？', a: '工會（團結）、協商（契約）、罷工（行動）。' },
            { q: '對於團結權的保障，最核心的法令是？', a: '工會法及不當勞動行為裁決制度。' },
            { q: '如果你是一間公司的唯一勞工，要如何發揮集體力量？', a: '個人可加入外部職業工會或尋求產業代表團體支持。' }
        ],
        flex: '**實境連結：尋找身邊的勞工局與工會**。教師可拉出 Google Map，讓學生搜尋戶籍地的勞工局與在地總工會位置。讓學生具體感覺到這些保護他們的機構並非遙遠的法條，而是隨時可求助的真實後盾。',
        summary: '團結一致就是力量，權益保障一起來。'
    },
    {
        id: 24, type: 'collective', icon: 'fa-id-badge', title: '我是未來的公民', subtitle: '勞動尊嚴與公民素養',
        prep: '公民素養投影卡。',
        goal: '提升勞動尊嚴感與公民素養。',
        steps: [
            { time: '4m', icon: 'fa-id-badge', type: '自我認同', content: '討論勞動不僅是為了賺錢。', q: '你覺得一個勞工在社會上的角色是什麼？只有薪水重要嗎？', a: '勞工是維持社會運轉不可或缺的齒輪。薪水固然重要，但勞動的尊嚴、自我實現以及為社會帶來的價值同等重要。' },
            { time: '7m', icon: 'fa-solid fa-heart-pulse', type: '勞動尊嚴', content: '尊重彼此的工作價值與勞動條件。', q: '如果你是客人，你如何展現對勞工的尊重？', a: '理解各行業的辛勞，保持禮貌，不當奧客，不把「花錢就是大爺」的態度帶入消費場合，尊重每一次的服務。' },
            { time: '4m', icon: 'fa-solid fa-graduation-cap', type: '畢業宣誓', content: '宣布完成所有課程模組。', q: '你覺得這 24 課對你未來的打工生活有什麼實際幫助？', a: '（總結）了解法律底線，懂得辨識危險與陷阱，明白遇糾紛時如何蒐證求援，成為一名懂得保護自己與他人的現代公民。' }
        ],
        quizzes: [
            { q: '提升勞動素養的主要目的是？', a: '保護自己、尊重他人、維護公平健康的勞動市場環境。' },
            { q: '當你看見不公平的勞資情境時，最好的公民行動是？', a: '了解事實、適時發聲或支持受害者、並透過官方法律管道處理。' },
            { q: '勞動尊嚴的基礎在於？', a: '相互尊重與遵守法律底線，不分職業高低。' }
        ],
        flex: '**未來展望：AI時代與新勞動權益**。可帶領學生展望未來：當 AI 與自動化取代傳統工作、外送員被演算法控制，未來的勞動權益將如何轉變？期許學生帶著這些權利意識，去面對未來多變的新型態勞資關係。',
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
            const ansHTML = s.a ? `<div class="key-answer" style="margin-top: 8px; color: var(--text-muted); font-size: 0.95rem; border-left: 3px solid var(--accent); padding-left: 12px; line-height: 1.5; background: rgba(0,0,0,0.03); padding-top: 8px; padding-bottom: 8px; border-radius: 0 8px 8px 0;"><strong style="color: var(--accent);"><i class="fa-solid fa-lightbulb"></i> 教學引導參考：</strong><br>${s.a}</div>` : '';
            return `
                <div class="timeline-item">
                    <div class="tl-icon-circle"><i class="fa-solid ${s.icon}"></i></div>
                    <div class="tl-meta">${s.time} · ${s.type}</div>
                    <div class="tl-body">${s.content}</div>
                    <div class="key-question">${quest}${ansHTML}</div>
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

            <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px;">
                <button class="btn-copy" onclick="copyPlanSnippet('${m.title}')"><i class="fa-regular fa-copy"></i> 複製教案大綱</button>
                <button class="btn-copy" style="background: #3742fa; color: white; border-color: #3742fa;" onclick="startPresentation(${m.id})"><i class="fa-solid fa-desktop"></i> 開啟大螢幕簡報</button>
                <button class="btn-copy" style="background: #ff4757; color: white; border-color: #ff4757;" onclick="startQuizGame(${m.id})"><i class="fa-solid fa-gamepad"></i> 進入益智挑戰賽</button>
            </div>

            <div class="goal-section" style="border-left-color: ${m.type === 'individual' ? 'var(--individual)' : 'var(--collective)'}">
                <h3><i class="fa-solid fa-crosshairs"></i> 本課教學目標</h3>
                <p style="font-weight: 500; font-size: 1.1rem; color: var(--text-main); margin: 0;">${m.goal || '設定教學重點。'}</p>
            </div>

            <h3 style="display: flex; align-items: center; gap: 12px; margin-bottom: 40px; color: var(--primary); font-size: 1.3rem;">
                <i class="fa-solid fa-map-location-dot" style="color: var(--accent);"></i> 15 分鐘教學地圖
            </h3>

            <div class="timeline">${stepsHTML}</div>

            <div style="background: linear-gradient(135deg, #2f3542, #1e272e); padding: 30px; border-radius: 24px; color: white; text-align: center; margin-bottom: 60px;">
                <i class="fa-solid fa-puzzle-piece" style="color: #ffca28; margin-bottom: 12px; font-size: 1.5rem;"></i>
                <div style="font-size: 1.2rem; font-weight: 700;">重點收尾：${m.summary || '整理課程精華。'}</div>
            </div>

            <div class="quiz-section">
                <div class="quiz-title"><i class="fa-solid fa-lightbulb" style="color: #ffca28;"></i> 核心觀念檢核 (Concept Check)</div>
                <div class="quiz-grid">${quizzesHTML}</div>
            </div>

            <div class="flex-box">
                <h4><i class="fa-solid fa-wand-magic-sparkles"></i> 教學小撇步 (Flexibility)</h4>
                <p style="margin: 0; color: var(--text-muted); line-height: 1.6;">${(m.flex || '老師可依課堂氣氛彈性調整。').replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--primary);">$1</strong>')}</p>
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

// ==========================================
// Presentation Mode Logic
// ==========================================
let currentSlideIndex = 0;
let slidesData = [];
const overlay = document.getElementById('presentation-overlay');
const slideContainer = document.getElementById('slide-container');
const prevBtn = document.getElementById('prevSlideBtn');
const nextBtn = document.getElementById('nextSlideBtn');
const counterEl = document.getElementById('slide-counter');
const closeBtn = document.getElementById('closePresentationBtn');

window.startPresentation = function(moduleId) {
    const m = modulesData.find(x => x.id === moduleId);
    if (!m) return;
    
    // Close modal to prevent scroll issues
    window.closeModalBox();

    // Generate Slides
    slidesData = [];
    
    // Slide 1: Cover
    slidesData.push(`
        <div class="slide">
            <div class="slide-label"><i class="fa-solid ${m.icon}"></i> ${m.type === 'individual' ? '個體勞動模組' : '集體勞動模組'}</div>
            <h1 class="slide-title">${m.title}</h1>
            <div class="slide-subtitle">${m.subtitle}</div>
            <div class="slide-content-box" style="text-align: center; border-left: none; border-top: 5px solid var(--accent);">
                <i class="fa-solid fa-crosshairs slide-icon"></i>
                <div style="font-size: 2rem; color: #fff; font-weight: 700;">${m.goal}</div>
            </div>
            <div class="slide-instruction">按 <kbd>&rarr;</kbd> 或空白鍵進入下一頁 (Press Right Arrow / Space)</div>
        </div>
    `);

    // Slides for Steps
    m.steps.forEach((s, idx) => {
        let escapedA = s.a ? s.a.replace(/'/g, "&#39;").replace(/"/g, "&quot;") : '';
        let ansHTML = s.a ? `<div class="slide-a-text js-revealable"><i class="fa-solid fa-lightbulb"></i> 教學解答：${escapedA}</div>` : '';
        slidesData.push(`
            <div class="slide">
                <div class="slide-label">步驟 ${idx + 1} / ${s.time} / ${s.type}</div>
                <div class="slide-content-box">
                    <i class="fa-solid ${s.icon} slide-icon"></i>
                    <div style="font-size: 2.2rem; color: #dfe4ea; margin-bottom: 20px; font-weight: 600;">${s.content}</div>
                    <div class="slide-q-text">Q: ${s.q}</div>
                    ${ansHTML}
                </div>
                <div class="slide-instruction">按 <kbd>空白鍵</kbd> 顯示解答，再按進入下一頁</div>
            </div>
        `);
    });

    // Slides for Quizzes
    if (m.quizzes && m.quizzes.length > 0) {
        m.quizzes.forEach((q, idx) => {
            let escapedA = q.a ? q.a.replace(/'/g, "&#39;").replace(/"/g, "&quot;") : '';
            slidesData.push(`
                <div class="slide">
                    <div class="slide-label">核心觀念檢核 QUESTION 0${idx + 1}</div>
                    <div class="slide-content-box" style="border-left: 5px solid #ff4757;">
                        <i class="fa-solid fa-circle-question slide-icon" style="color: #ff4757;"></i>
                        <div class="slide-q-text" style="color: #ff4757;">${q.q}</div>
                        <div class="slide-a-text js-revealable" style="background: rgba(255,255,255,0.1); color: #fff; border-left: 5px solid #fff;"><i class="fa-solid fa-check-double"></i> ${escapedA}</div>
                    </div>
                    <div class="slide-instruction">按 <kbd>空白鍵</kbd> 顯示觀念解答</div>
                </div>
            `);
        });
    }

    // Slide: Summary
    slidesData.push(`
        <div class="slide">
            <div class="slide-label">重點收尾 SUMMARY</div>
            <div class="slide-content-box" style="text-align: center; background: linear-gradient(135deg, #2f3542, #1e272e);">
                <i class="fa-solid fa-puzzle-piece slide-icon" style="font-size: 5rem; margin-bottom: 40px;"></i>
                <div style="font-size: 3rem; font-weight: 800; color: #ffca28;">${m.summary}</div>
            </div>
            <div class="slide-instruction">按 <kbd>&rarr;</kbd> 或空白鍵進入下一頁 (Press Right Arrow / Space)</div>
        </div>
    `);

    // Slide Final: Flex (Student-facing title)
    if (m.flex) {
        let flexParsed = m.flex.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #ffca28;">$1</strong>');
        slidesData.push(`
            <div class="slide">
                <div class="slide-label">延伸思考 THINKING DEEPER</div>
                <div class="slide-content-box" style="border-top: 5px solid #2ed573;">
                    <i class="fa-solid fa-lightbulb slide-icon" style="color: #2ed573;"></i>
                    <div style="font-size: 2.2rem; color: #dfe4ea; margin-bottom: 20px; font-weight: 600; line-height: 1.6;">
                        ${flexParsed}
                    </div>
                </div>
                <div class="slide-instruction">按 <kbd>Esc</kbd> 或點擊 X 退出簡報</div>
            </div>
        `);
    }

    currentSlideIndex = 0;
    renderPresentation();
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handlePresentationKeydown);
};

function renderPresentation() {
    slideContainer.innerHTML = slidesData.join('');
    updateSlideDisplay();
}

function updateSlideDisplay() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((s, idx) => {
        if (idx === currentSlideIndex) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
    counterEl.innerText = `${currentSlideIndex + 1} / ${slides.length}`;
    prevBtn.style.opacity = currentSlideIndex === 0 ? '0.3' : '1';
    prevBtn.style.pointerEvents = currentSlideIndex === 0 ? 'none' : 'auto';
    nextBtn.style.opacity = currentSlideIndex === slidesData.length - 1 ? '0.3' : '1';
    nextBtn.style.pointerEvents = currentSlideIndex === slidesData.length - 1 ? 'none' : 'auto';
}

function nextSlideAction() {
    // Check if current slide has unrevealed answers
    const activeSlide = document.querySelector('.slide.active');
    if (activeSlide) {
        const unrevealed = activeSlide.querySelector('.js-revealable:not(.revealed)');
        if (unrevealed) {
            unrevealed.classList.add('revealed');
            return; // Don't go to next slide, just reveal
        }
    }
    
    if (currentSlideIndex < slidesData.length - 1) {
        currentSlideIndex++;
        updateSlideDisplay();
    }
}

function prevSlideAction() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlideDisplay();
    }
}

function endPresentation() {
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handlePresentationKeydown);
}

prevBtn.addEventListener('click', prevSlideAction);
nextBtn.addEventListener('click', nextSlideAction);
closeBtn.addEventListener('click', endPresentation);

function handlePresentationKeydown(e) {
    if (overlay.classList.contains('hidden')) return;
    
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault(); // prevent scroll
        nextSlideAction();
    } else if (e.key === 'ArrowLeft') {
        prevSlideAction();
    } else if (e.key === 'Escape') {
        endPresentation();
    }
}

const quizGamesData = {
  "1": [
    {
      "q": "口頭答應明天上班，但老闆沒給紙本合約，這份工作關係成立嗎？",
      "o": [
        "成立，口頭共識即契約",
        "不成立，一定要簽名",
        "不成立，一定要蓋章",
        "看老闆心情"
      ],
      "a": 0,
      "exp": "勞動基準法並未規定勞動契約一定要『簽紙本』。只要雙方對工作內容與薪資有共識，即使是口頭承諾，勞僱關係同樣具有法律效力。"
    },
    {
      "q": "合約寫月薪 1 萬（低於基本工資），你簽名了，這份合約有效嗎？",
      "o": [
        "有效，因為我簽名了",
        "無效，勞基法是地板",
        "有效，只要雙方自願",
        "看老闆有沒有虧損"
      ],
      "a": 1,
      "exp": "勞基法是勞動條件的最低標準（地板）。任何協定只要低於勞基法規定的標準（如基本工資），該約定在法律上就是無效，應依法律規定執行。"
    },
    {
      "q": "下列哪一項不是證明你真的在那裡上班的關鍵證據？",
      "o": [
        "打卡紀錄",
        "薪資轉帳紀錄",
        "老闆的名片",
        "LINE 的排班對話"
      ],
      "a": 2,
      "exp": "老闆的名片只能證明你認識他。真正的勞動關係證明必須包含：勞務供給（打卡、排班）與對價關係（薪轉、薪資條）。"
    }
  ],
  "2": [
    {
      "q": "工作前兩小時的加班費，法定加成倍率是多少？",
      "o": [
        "1.33 倍",
        "1.34 倍",
        "1.5 倍",
        "2 倍"
      ],
      "a": 1,
      "exp": "依照勞基法第 24 條，平日延長工作時間（加班）在兩小時以內者，應按時薪加給 1/3（約 1.34 倍）以上。"
    },
    {
      "q": "老闆規定「加班只能換補休」而不能領錢，這合法嗎？",
      "o": [
        "合法，公司規定為準",
        "不合法，由勞工自主決定",
        "合法，只要有補休就不虧",
        "看公司有沒有賺錢"
      ],
      "a": 1,
      "exp": "加班費與補休的選擇權在於『勞工』。雇主不能單方面規定只能補休，如果勞工想要領加班費，雇主不能拒絕。"
    },
    {
      "q": "一天正常工時加上加班時間，總上限是多少小時？",
      "o": [
        "8 小時",
        "10 小時",
        "12 小時",
        "14 小時"
      ],
      "a": 2,
      "exp": "勞基法規定，勞工每日正常工作時間加上延長工作時間（加班），總計不得超過 12 小時，以保護勞工身心健康。"
    }
  ],
  "3": [
    {
      "q": "求職時老闆要求「保管身分證」，你應該？",
      "o": [
        "乖乖交出，展現誠意",
        "堅定拒絕，證件不離身",
        "只要有給錢就沒關係",
        "帶影本給他就好"
      ],
      "a": 1,
      "exp": "『七不原則』之一就是『證件不離身』。正當公司不應、也沒有權力保管員工的身分證件原件。"
    },
    {
      "q": "下列哪一個字眼在徵才廣告中，你最需要高度警覺？",
      "o": [
        "免經驗月入十萬",
        "需配合輪班",
        "具備英語能力",
        "提供團體保險"
      ],
      "a": 0,
      "exp": "『免經驗、高薪、門檻低』是常見的詐騙誘餌。不合理的報酬通常隱藏著巨大的法律風險（如車手）或金錢陷阱。"
    },
    {
      "q": "求職防騙的「三要」中，首要任務是？",
      "o": [
        "要先交保證金",
        "要告知親友面試地點",
        "要馬上簽約",
        "要買公司的產品"
      ],
      "a": 1,
      "exp": "為了安全起見，應告知親友面試地點，或請人陪同，並查證應徵資訊是否屬實，不可隨意簽約、繳錢或買產品。"
    }
  ],
  "4": [
    {
      "q": "老闆說「見習試做兩天，錄取才給薪水」，這樣合法嗎？",
      "o": [
        "不合法，有勞務必給薪",
        "合法，這只是測試",
        "看學生的表現",
        "看店家的規模"
      ],
      "a": 0,
      "exp": "只要有提供勞務（受雇主指揮監督），雇主就必須支付薪資。法律上沒有所謂『見習不支薪』的空間。"
    },
    {
      "q": "打工不小心打破杯子，老闆說要從薪水裡現扣 500 元賠償？",
      "o": [
        "合法，損壞本來就該賠",
        "不合法，雇主不得預扣工資",
        "只要老闆高興就可以",
        "看杯子的價值"
      ],
      "a": 1,
      "exp": "勞基法規定『雇主不得預扣勞工工資作為賠償費用』。損害賠償雖然依民法存在，但不能直接從薪水扣除，應由雙方協議或法律訴訟處理。"
    },
    {
      "q": "目前法定的每小時基本工資（時薪）是根據？",
      "o": [
        "老闆自訂",
        "勞資會議投票",
        "國家法定標準",
        "看行業別"
      ],
      "a": 2,
      "exp": "基本工資是由勞動部審議委員會議討論，並由行政院核定發布之法定最低標準，任何雇主皆不得私自調降低於此底線。"
    }
  ],
  "5": [
    {
      "q": "勞退 6% 的養老金是從哪邊撥出來的？",
      "o": [
        "員工薪水扣除",
        "政府補助",
        "雇主額外提撥",
        "勞保局發放"
      ],
      "a": 2,
      "exp": "雇主應為勞工按月提繳不低於每月工資 6% 的退休金，存於勞民個人退休金專戶，這是雇主法定的額外負擔，不能從員工薪水中扣除。"
    },
    {
      "q": "工讀生出車禍受傷，但老闆沒投保勞保，老闆有責任嗎？",
      "o": [
        "沒有，因為沒加保",
        "有，仍須負擔職災補償",
        "只要給予紅包即可",
        "看員工有沒有闖紅燈"
      ],
      "a": 1,
      "exp": "即使雇主違法未投保，若是發生職災，雇主仍需負擔勞基法規定的補償責任。這也是為什麼一定要投保，對勞雇雙方都有保障。"
    },
    {
      "q": "哪一天開始上班，雇主就應該幫你投保勞工保險？",
      "o": [
        "上班第一天",
        "通過試用期後",
        "上班滿一週後",
        "看老闆心情"
      ],
      "a": 0,
      "exp": "依法規定，在勞工到職、入會、到訓之『當日』，雇主就必須辦理投保手續，不能拖延。"
    }
  ],
  "6": [
    {
      "q": "如果我在飲料店連續工作 5 小時沒休息，這合法嗎？",
      "o": [
        "合法，只要生意好",
        "不合法，每 4 小時要休 30 分鐘",
        "看店長有沒有請喝飲料",
        "看我有沒有嫌累"
      ],
      "a": 1,
      "exp": "勞基法規定，勞工繼續工作 4 小時，至少應有 30 分鐘之休息。休息時間內勞工不應受雇主指揮監督。"
    },
    {
      "q": "所謂「休息時間」，指的是？",
      "o": [
        "在位子上待命",
        "可以自由離開、自行分配的時間",
        "隨時準備接電話的狀態",
        "看老闆的規定"
      ],
      "a": 1,
      "exp": "真正的休息時間必須是勞工可以不受干擾、自由支用的時間。如果是坐在位子上待命或隨時要工作，則應計入工時算工資。"
    },
    {
      "q": "除了休息時間外，勞工每日正常工作時間上限是幾小時？",
      "o": [
        "7 小時",
        "8 小時",
        "9 小時",
        "10 小時"
      ],
      "a": 1,
      "exp": "法律規定每日正常工時為 8 小時，每週為 40 小時。超過的時間即為加班，應另計加班費。"
    }
  ],
  "7": [
    {
      "q": "所謂週休二日，是由哪兩天組成的？",
      "o": [
        "兩天例假",
        "兩天休息日",
        "一天例假與一天休息日",
        "兩天特休"
      ],
      "a": 2,
      "exp": "現行法規為『一例一休』。包含一天『例假』（除非突發事件否則禁加班）及一天『休息日』（可經同意加班但錢很多）。"
    },
    {
      "q": "例假日（通常是週日）老闆可以隨便叫我回來加班嗎？",
      "o": [
        "可以，只要給雙倍薪水",
        "不行，除非遇到天災或法律例外",
        "看我有沒有空",
        "只要老闆說急事就可以"
      ],
      "a": 1,
      "exp": "例假是法定的強硬休息，只有在天災、事變或突發事件，且必須報備主管機關的情況下才能停止工作，不可隨便協議加班。"
    },
    {
      "q": "如果公司實施「連上 12 天班」，這符合法律嗎？",
      "o": [
        "符合，只要我有同意",
        "不符合，勞工 7 日內應有 1 日例假",
        "看老闆的分紅多少",
        "符合，只要每天沒超時"
      ],
      "a": 1,
      "exp": "勞基法原則規定，勞工每 7 日中應有 2 日重之休息，其中 1 日為例假。除非特定行業例外經程序核准，否則不得連續工作超過 6 天。"
    }
  ],
  "8": [
    {
      "q": "上班途中發生車禍，是否算在職業災害保護範圍內？",
      "o": [
        "算，這是通勤職災",
        "不算，那是交通意外",
        "只有在公司受傷才算",
        "看誰撞誰"
      ],
      "a": 0,
      "exp": "勞工於上下班途中，在合理路徑上發生的意外，且無重大交通違規情事，視為職業災害，享有醫療與薪資補償。"
    },
    {
      "q": "看到工作環境有立即危險（如天花板要掉下來），我應該？",
      "o": [
        "繼續做，展現勇氣",
        "行使退避權，先行安全離開",
        "拍照打卡上傳",
        "先跟同事討論"
      ],
      "a": 1,
      "exp": "職安法賦予勞工『退避權』。當工作場所有發生立即危險之虞時，勞工得自行停止作業並退避至安全場所，且不應因此受不利待遇。"
    },
    {
      "q": "發生職災後的醫療費用，誰應該優先負擔補償責任？",
      "o": [
        "勞工自己",
        "健保局",
        "雇主",
        "撞我的路人"
      ],
      "a": 2,
      "exp": "勞基法規定，勞工因遭受職業傷害，雇主應補償其『必需之醫療費用』，並在醫療期間支付『原領工資』。"
    }
  ],
  "9": [
    {
      "q": "老闆積欠薪水，我想要求援，最快的方法是撥打？",
      "o": [
        "110 警察局",
        "1955 勞工諮詢申訴專線",
        "119 火警電話",
        "117 查號台"
      ],
      "a": 1,
      "exp": "1955 是勞動部提供的 24 小時免費諮詢與申訴專線，專門處理各類勞資爭議需求。"
    },
    {
      "q": "要檢舉慣老闆，最關鍵的工作是？",
      "o": [
        "跟老闆吵架",
        "拍桌子抗議",
        "平時做好證據蒐集",
        "找媒體爆料"
      ],
      "a": 2,
      "exp": "法律講求證據。平時應保留：勞動契約、薪資條、存摺影本、出勤紀錄（如打卡照）或 LINE 溝通紀錄，勝算才大。"
    },
    {
      "q": "離職後才發現老闆少幫我繳勞保，我還能去檢舉嗎？",
      "o": [
        "不能，已經離職了",
        "可以，權利不因離職而消失",
        "只能自己認賠",
        "看離職單有沒有寫放棄"
      ],
      "a": 1,
      "exp": "勞基法的權利是有追溯期的。發現雇主違法（如高薪低報、欠費），即使離職後一段時間內仍可向勞工局申訴追償。"
    }
  ],
  "10": [
    {
      "q": "同樣的工作量與資歷，男生領 5 萬，女生領 4 萬，這符合哪條法律？",
      "o": [
        "勞基法",
        "性別平等工作法（同工同酬）",
        "民法",
        "公司自訂規則"
      ],
      "a": 1,
      "exp": "性別平等工作法規定，雇主對受僱者薪資之給付，不得因性別而有差別待遇；其工作價值相同者，應給給位相同。薪資。"
    },
    {
      "q": "在職場遇到不舒服的性暗示或肢體接觸，我該怎麼辦？",
      "o": [
        "假裝沒聽到",
        "私下忍耐",
        "明確表示反對並向雇主或外部申訴",
        "直接辭職"
      ],
      "a": 2,
      "exp": "職場性騷擾絕對不能忍耐。應保留證據（人證或通訊紀錄），並要求雇主處理。若雇主不處理，可向當地勞工局申訴。"
    },
    {
      "q": "老闆因為員工請產假或生理假而將其解雇，這合法嗎？",
      "o": [
        "合法，公司缺人手",
        "不合法，違反性平法保護",
        "看公司大小",
        "只要有給資遣費就合法"
      ],
      "a": 1,
      "exp": "性平法保障勞工有請生理假、產假、陪產假等權利，雇主不得以此為由拒絕或給予解僱、扣薪等不利之處分。"
    }
  ],
  "11": [
    {
      "q": "工作滿「半年」後，依法享有的特休天數是？",
      "o": [
        "0 天",
        "3 天",
        "7 天",
        "10 天"
      ],
      "a": 1,
      "exp": "根據現行勞基法，勞工繼續工作滿 6 個月以上 1 年未滿者，應給予特別休假 3 日。"
    },
    {
      "q": "特休到底是誰來決定哪一天休假？",
      "o": [
        "由老闆強制排定",
        "由勞工自主排定",
        "由抽籤決定",
        "看天氣決定"
      ],
      "a": 1,
      "exp": "特別休假期日，應由『勞工』排定之。但雇主基於企業經營上之急迫需求，得與勞工協商調整，不能片面決定。"
    },
    {
      "q": "到年底了，我特休還有 5 天沒休完，老闆必須？",
      "o": [
        "直接註銷沒收",
        "請我自己認賠",
        "折算工資（換錢）發給",
        "強制我明年繼續休"
      ],
      "a": 2,
      "exp": "年度終結或契約終止而未休之特休日數，雇主應發給工資。這是勞工法定的權益，不能隨便消失。"
    }
  ],
  "12": [
    {
      "q": "下班後老闆一直傳 LINE 交代公事，這 5 分鐘的回覆算加班嗎？",
      "o": [
        "不算，才 5 分鐘",
        "算，只要有提供勞務事實即算時數",
        "算我有熱忱",
        "看有沒有已讀不回"
      ],
      "a": 1,
      "exp": "只要受雇主指揮監督處理公務，不論時間長短或是否在辦公室，皆屬工作時間。累積的時數應併入加班計算。"
    },
    {
      "q": "老闆可以無故查閱我的電腦裡的私人通訊對話嗎？",
      "o": [
        "可以，那是公司的電腦",
        "不行，涉及個人隱私權",
        "只要有密碼就可以",
        "看合約有沒有寫透明化"
      ],
      "a": 1,
      "exp": "職場雖然有管理權，但隱私權仍受憲法與通訊保障。除非有強大的法律依據（如涉及犯罪），否則雇主不應隨意窺視私人通訊。"
    },
    {
      "q": "老闆在廁所安裝監視器來抓偷懶的員工，這是否合法？",
      "o": [
        "合法，為了安全",
        "不合法，嚴重侵犯私密空間隱私",
        "看有沒有錄到重要內容",
        "只要有公告就合法"
      ],
      "a": 1,
      "exp": "監視器的安裝必須具備必要性與正當性。廁所、更衣室等高度私密空間嚴禁安裝，這已觸犯妨害秘密等相關法律。"
    }
  ],
  "13": [
    {
      "q": "為什麼歷史上勞工要組成「工會」？",
      "o": [
        "為了跟老闆聚餐",
        "為了提升跟資方談判的對等筹碼",
        "為了不用工作",
        "為了繳會費"
      ],
      "a": 1,
      "exp": "單一勞工面對資方極其弱勢。集結成工會才能平衡雙方資訊與資源的不對等，進行實質的公平協商。"
    },
    {
      "q": "面對大公司不合理的變動，個人申訴無果時，最有效的策略是？",
      "o": [
        "辭職走人",
        "集結同事集體發聲或加入工會",
        "在網路匿名辱罵",
        "忍耐到退休"
      ],
      "a": 1,
      "exp": "團體行動能產生壓力，並受到法律（工會法）的特別保護。資方對一個人可以隨意開除，但對一群人必須坐下來談。"
    },
    {
      "q": "「單箭易折，萬箭難撼」說明了集體勞動權權力的哪一項核心？",
      "o": [
        "團結權",
        "生存權",
        "自由權",
        "財產權"
      ],
      "a": 0,
      "exp": "這是團結權的體現。勞動法透過保護勞工結社（組工會），讓個人力量匯集成集體力量，維護職場正義。"
    }
  ],
  "14": [
    {
      "q": "老闆威脅說「誰參加工會就開除誰」，這在法律上被稱為？",
      "o": [
        "合理的績效考核",
        "不當勞動行為（打壓）",
        "老闆的言論自由",
        "看心情決定"
      ],
      "a": 1,
      "exp": "工會法保護勞工有參加工會的權利。雇主以參加工會為由給予解聘等不利處分，即構成不當勞動行為，是違法的。"
    },
    {
      "q": "憲法保障的哪一項權利，是勞工組隊打怪的「保護傘」？",
      "o": [
        "言論自由",
        "結社自由 (結社權)",
        "遷徒自由",
        "宗教自由"
      ],
      "a": 1,
      "exp": "憲法第 14 條保障人民有結社之自由。這在勞資關係中演化為勞工組織工會的法定權利，不可被無理剝奪。"
    },
    {
      "q": "某企業發獎金給「沒參加工會」的人，卻不發給有參加的人，這是否可行？",
      "o": [
        "可行，老闆有權分配獎金",
        "不可行，這屬差別對待與打壓工會",
        "可行，鼓勵員工忠誠",
        "只要沒扣薪水就可以"
      ],
      "a": 1,
      "exp": "這被視為對工會活動的不利益待遇與介入。雇主不能用金錢誘惑或懲罰來干涉勞工行使結社權。"
    }
  ],
  "15": [
    {
      "q": "除了抗議之外，工會平時通常會提供哪種有意義的服務？",
      "o": [
        "法律諮詢與受僱權益保護",
        "幫忙洗車",
        "提供免費午餐",
        "看老闆臉色"
      ],
      "a": 0,
      "exp": "現代工會是勞工的後盾，提供專業諮詢、甚至代勞資談判。良好的工會能提升員工的職場幸福感與安全感。"
    },
    {
      "q": "「職業工會」與「企業工會」最大的不同點在於？",
      "o": [
        "職業工會可以跨公司加入",
        "企業工會要繳比較多錢",
        "只有職業工會有勞保",
        "沒什麼不同"
      ],
      "a": 0,
      "exp": "一般沒加入公司的（如接案者、小店員）可加入職業工會；同一公司的員工則組成企業工會，各有其專業保障範疇。"
    },
    {
      "q": "遇到老闆要隨意調動你到偏遠分店，誰可以陪你一起去談判？",
      "o": [
        "爸爸媽媽",
        "隔壁鄰居",
        "工會代表或法律專業人員",
        "路人"
      ],
      "a": 2,
      "exp": "工會代表了解法律規範與談判技巧，能作為專業的第三者陪同勞工進行糾紛調處，比起個人面對老闆更有保障。"
    }
  ],
  "16": [
    {
      "q": "公司今年獲利創新高，工會代表去跟老闆談「年終加發」，這過程稱為？",
      "o": [
        "一般聊天",
        "團體協商與協約爭取",
        "情勒老闆",
        "看誰聲音大"
      ],
      "a": 1,
      "exp": "團體協商是法律賦予工會的武器。透過集體力量簽訂『團體協約』，其中的福利條件通常會優於法律基本的勞基法。"
    },
    {
      "q": "「團體協約」簽訂後的效力如何？",
      "o": [
        "只是參考性質",
        "具有法律效力，雇主必須遵守",
        "老闆想改隨時能改",
        "只有簽名的人才有用"
      ],
      "a": 1,
      "exp": "團體協約如同法律契約，對雇主與工會會員有強制約束力。雇主若違反協約條件，工會可依法提告或申請裁決。"
    },
    {
      "q": "如果我想爭取在公司設立「健身房」，加入工會去談會比一個人談有效嗎？",
      "o": [
        "是，集體願望清單更有分量",
        "否，老闆只聽個人的",
        "沒差別",
        "看健身房大不大"
      ],
      "a": 0,
      "exp": "福委會或工會能彙整大眾需求與公司協商。比起個人單點要求的『自私感』，團體要求的『共同福祉』在管理上更容易被採納。"
    }
  ],
  "17": [
    {
      "q": "勞資會議中，勞家代表與資方代表的人數應該？",
      "o": [
        "資方要比較多",
        "勞方要比較多",
        "人數對等（各半）",
        "隨便幾個人"
      ],
      "a": 2,
      "exp": "勞資會議是法定的對等對商平台，雙方代表數量必須相等，以確保會議討論的公平性與對稱性。"
    },
    {
      "q": "公司若因為虧損想實施「無薪假」，第一步應該？",
      "o": [
        "直接公告不用來",
        "召開勞資會議協商並簽署同意書",
        "看老闆心情",
        "把員工趕走"
      ],
      "a": 1,
      "exp": "重大勞動條件變更（如減薪、無薪假）必須經過勞資誠信協商，並經勞工個人同意簽名後，才能報備實施。"
    },
    {
      "q": "勞資會議討論的議題，通常包含哪些範圍？",
      "o": [
        "排班規則、制服樣式、工作環境改善",
        "老闆明年的私人旅遊計畫",
        "同事的薪水具體金額",
        "看有沒有提供便當"
      ],
      "a": 0,
      "exp": "勞資會議除了薪資調整，更多在討論日常的工作環境與管理細節。透過對等溝通，避免小誤會累積成大罷工。"
    }
  ],
  "18": [
    {
      "q": "全台灣統一的勞工權益申訴電話是？",
      "o": [
        "1922",
        "1955",
        "1999",
        "113"
      ],
      "a": 1,
      "exp": "1955 勞工諮詢申訴專線，是勞動部為全體勞工提供的免費、全方位救濟窗口。"
    },
    {
      "q": "我是只有一個人的工作室小員工，我也能參加工會嗎？",
      "o": [
        "可以，加入所屬行業的職業工會",
        "不行，公司要有 30 人才行",
        "只能加入老闆的家族群組",
        "看我想不想"
      ],
      "a": 0,
      "exp": "雖然組『企業工會』要 30 人，但個人隨時可加入社會上的『職業工會』或『產業工會』，尋求跨單位的支援。"
    },
    {
      "q": "工會能幫我解決除了法律以外的什麼職涯障礙？",
      "o": [
        "專業技能訓練與考照資訊",
        "幫我決定晚餐吃什麼",
        "介紹對象",
        "幫我付罰單"
      ],
      "a": 0,
      "exp": "許多職業工會致力於專業培訓與交流，幫助會員提升技術實力，這也是集體權益中『共同發展』的一環。"
    }
  ],
  "19": [
    {
      "q": "「罷工」在勞動法中的定位是？",
      "o": [
        "合法的最後爭議手段",
        "非法的暴動行為",
        "為了放長假的藉口",
        "造成大眾不便的罪魁禍首"
      ],
      "a": 0,
      "exp": "罷工是憲法與工會法保障的權利。當所有對商都破裂時，勞工透過暫停提供勞務來平衡談判權，是法定的爭議行為。"
    },
    {
      "q": "罷工期間，老闆需要照常發薪水給罷工者嗎？",
      "o": [
        "需要，勞工最大",
        "不需要，有勞務才有錢",
        "看法律有沒有規定",
        "看誰贏"
      ],
      "a": 1,
      "exp": "罷工的原則是『無勞務、無工資』。勞工在罷工期間雖然保有職位，但因為停止工作，雇主也沒有義務給付薪資。"
    },
    {
      "q": "罷工的主要目的通常不是為了「不工作」，而是為了？",
      "o": [
        "逼資方回到談判桌好好講",
        "讓訊號變爛",
        "讓老闆破產",
        "看誰撐得久"
      ],
      "a": 0,
      "exp": "罷工是手段而非目的。真正的目的是透過暫時的營業損失，迫使掌控資源的資方重視勞工訴求，並進行有誠意的談判。"
    }
  ],
  "20": [
    {
      "q": "面對媒體報導罷工造成大眾不便，身為公民應？",
      "o": [
        "跟著網路爆言辱罵",
        "探究罷工背後的核心訴求與勞動困境",
        "只關心自己的機票有沒有退費",
        "轉發未經證實的消息"
      ],
      "a": 1,
      "exp": "罷工的不便感往往是資方與媒體的操作重點。成熟的公民應看見結構性問題（如過勞安全），而非只停留在消費者的抱怨。"
    },
    {
      "q": "下列哪一種言論，帶有對罷工權的負面標籤與情勒？",
      "o": [
        "勞工也有家庭要養",
        "不爽就不要做啊，領這麼多還貪",
        "爭取更好的醫療品質",
        "法律應保護談判對等"
      ],
      "a": 1,
      "exp": "『不爽不要做』是忽略權力不對等的標籤式發言。每個人都有追求合理尊嚴與法律保障的權利，不應被情緒勒索所抹滅。"
    },
    {
      "q": "工會罷工是為了守護更好的品質，這句話可以用在哪個行業最貼切？",
      "o": [
        "醫護業（如護病比）",
        "航空業（如飛安與過勞）",
        "交通運輸業",
        "以上皆是"
      ],
      "a": 3,
      "exp": "許多行業的優質勞動條件（如充足的休息與人力）是確保服務安全與品質的基礎。守護勞權其實就是在守護大眾的安全。"
    }
  ],
  "21": [
    {
      "q": "要發起「合法罷工」，必須經過的第一道法律門檻是？",
      "o": [
        "老闆點頭",
        "勞資爭議調解不成立",
        "媒體報導過半",
        "全體員工辭職"
      ],
      "a": 1,
      "exp": "依照勞資爭議處理法，罷工必須先經過『調解程序』。只有在調解委員會調解不成立後，工會才能進一步啟動罷工投票。"
    },
    {
      "q": "罷工投票必須採取的特定形式是？",
      "o": [
        "LINE 投票",
        "大家當面舉手",
        "全體會員不記名投票且過半數同意",
        "抽籤決定"
      ],
      "a": 2,
      "exp": "為了確保真實集體意志並保護投票者安全，投票必須『不記名』。只有過半數同意，這場罷工才具有法律的正當與保護力。"
    },
    {
      "q": "為什麼法律要規定這麼複雜的罷工程序？",
      "o": [
        "為了讓勞工知難而退",
        "為了讓罷工慎重進行，並給談判最後機會",
        "為了讓律師賺錢",
        "為了讓政府有事做"
      ],
      "a": 1,
      "exp": "罷工對社會影響巨大。法定的『緩衝與投票期』是為了確保這是一項經過深思熟慮的集體權利行使，而非一時的衝動。"
    }
  ],
  "22": [
    {
      "q": "依照台灣現行法規，哪些身分的人絕對「禁止」罷工？",
      "o": [
        "現役軍人與警察",
        "國中小老師",
        "醫院行政職",
        "外送員"
      ],
      "a": 0,
      "exp": "基於國家安全與緊急治安與生命維護之重大公益，現役軍人與警察被法律明文禁止行使罷工權。"
    },
    {
      "q": "教師與自來水從業人員，如果想罷工，會受到何種限制？",
      "o": [
        "完全隨便罷",
        "完全禁止，如同軍警",
        "有條件限制（如維持必要服務或法律特別約定）",
        "只要大家同意就可以"
      ],
      "a": 2,
      "exp": "對於涉及民生基礎（如水電、老師）的職業，法律通常會要求維持『基本服務』或是特定流程限制，以平衡公共利益與集體勞權。"
    },
    {
      "q": "被禁止或限制罷工的職業，通常由什麼機制來保障其爭議？",
      "o": [
        "只能自己忍耐",
        "由第三方強制仲裁或裁決程序",
        "靠老闆慈悲",
        "由家長會決定"
      ],
      "a": 1,
      "exp": "正因為這些職業不能或不便罷工，國家更有責任提供強力的『替代救濟（如強制仲裁）』，代替罷工由官方直接裁定結果。"
    }
  ],
  "23": [
    {
      "q": "勞資三權（團結、協商、爭議）中，最基礎的母權是？",
      "o": [
        "團結權（組工會）",
        "協商權（談條款）",
        "爭議權（罷工）",
        "生存權"
      ],
      "a": 0,
      "exp": "沒有團結結社，就沒有談判籌碼與抗爭力量。因此『團結權』是發展後續集體權利的起點與根基。"
    },
    {
      "q": "集體勞動權利大會師的真諦是？",
      "o": [
        "讓員工比老闆兇",
        "建立對等的溝通體系，共創職場正義",
        "讓公司關門大吉",
        "為了領會費補貼"
      ],
      "a": 1,
      "exp": "勞權不是要消滅資方，而是要讓原本失衡的天平回到中心。雙方在平等的位階上合作，才是健康的勞動社會。"
    },
    {
      "q": "如果我是未來的小老闆，我應該如何看待工會？",
      "o": [
        "視為洪水猛獸",
        "視為協助公司良性溝通與管理的夥伴",
        "找機會開除幹部",
        "假裝沒看見"
      ],
      "a": 1,
      "exp": "先進的企業將工會視為溝通橋樑與風險管理的夥伴。透過工會即時反映員工需求，能有效預防重大糾紛並穩定企業發展。"
    }
  ],
  "24": [
    {
      "q": "身為現代公民，我們學習勞動素養的最重要目的是？",
      "o": [
        "懂得如何蒐證提告",
        "保護自己、尊重他人工作尊嚴",
        "在網路上跟人吵架",
        "為了應付考試"
      ],
      "a": 1,
      "exp": "勞動素養包含『權利意識』與『公民尊重』。讓我們在職場中能保護自我權益，在消費時能同理他人辛勞，建立更公平的社會。"
    },
    {
      "q": "當你看見外送員在烈日下送餐，合適的公民行動是？",
      "o": [
        "因為慢了 1 分鐘給負評",
        "保持禮貌與感謝，並理解其勞動風險",
        "叫他跑快一點",
        "無視對方的存在"
      ],
      "a": 1,
      "exp": "勞動尊嚴始於日常。理解每一個行業背後的風險與法律底線，並給予應有的職業尊重，是每一位小公民應具備的素養。"
    },
    {
      "q": "勞動法並不是死的法條，它保障的是我們的？",
      "o": [
        "金錢利益",
        "工作生命與尊嚴的安全網",
        "長假權利",
        "對抗老闆的武器"
      ],
      "a": 1,
      "exp": "勞動法是用來接住每一位辛勤耕耘者的安全網。它確保我們不因追求生存而被剝削尊嚴，是進步公民社會的基石。"
    }
  ]
};

// ==========================================
// Quiz Game Engine Logic - Competitive Mode
// ==========================================
let gameTimer = null;
let currentGameState = {
    moduleId: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    lives: 3,
    timeLeft: 15,
    combo: 0
};

window.startQuizGame = function(moduleId) {
    const data = quizGamesData[moduleId];
    if (!data) return;
    
    window.closeModalBox();
    const gameOverlay = document.getElementById('game-overlay');
    const resultBox = document.getElementById('game-result');
    
    currentGameState = {
        moduleId: moduleId,
        questions: data,
        currentIndex: 0,
        score: 0,
        lives: 3,
        timeLeft: 15,
        combo: 0
    };
    
    gameOverlay.classList.remove('hidden');
    resultBox.classList.add('hidden');
    document.querySelector('.game-header').classList.remove('hidden'); // Show stats header
    document.getElementById('game-main').classList.remove('hidden');
    updateGameUI();
    loadGameQuestion(0);
};

function updateGameUI() {
    document.getElementById('game-score').innerText = String(currentGameState.score).padStart(4, '0');
    document.getElementById('lives-count').innerText = currentGameState.lives;
    document.getElementById('game-progress-text').innerText = "題號 " + (currentGameState.currentIndex + 1) + " / " + currentGameState.questions.length;
}

function loadGameQuestion(idx) {
    const qData = currentGameState.questions[idx];
    document.getElementById('game-explanation').classList.add('hidden');
    
    let optionsHTML = qData.o.map((opt, i) => {
        return '<button class="game-opt-btn" onclick="submitAnswer(' + i + ')">' +
               '<span style="opacity: 0.5; font-size: 0.9rem;">' + String.fromCharCode(65+i) + '</span> ' + opt +
               '</button>';
    }).join('');
    
    document.getElementById('game-question-box').innerHTML = 
        '<div class="game-q-text">' + qData.q + '</div>' +
        '<div class="game-options-grid">' + optionsHTML + '</div>';
    
    currentGameState.timeLeft = 15;
    const tBar = document.getElementById('timer-bar');
    tBar.style.width = '100%';
    tBar.style.background = 'linear-gradient(90deg, #2ed573, #7bed9f)';
    
    startTimer();
}

function startTimer() {
    clearInterval(gameTimer);
    gameTimer = setInterval(() => {
        currentGameState.timeLeft -= 0.1;
        const percent = (currentGameState.timeLeft / 15) * 100;
        const tBar = document.getElementById('timer-bar');
        tBar.style.width = percent + '%';
        
        if (percent < 30) {
            tBar.style.background = '#ff4757';
        }

        if (currentGameState.timeLeft <= 0) {
            clearInterval(gameTimer);
            handleTimeout();
        }
    }, 100);
}

window.submitAnswer = function(optIdx) {
    clearInterval(gameTimer);
    const qData = currentGameState.questions[currentGameState.currentIndex];
    const btns = document.querySelectorAll('.game-opt-btn');
    
    if (optIdx === qData.a) {
        btns[optIdx].classList.add('correct');
        currentGameState.combo++;
        const points = Math.floor(currentGameState.timeLeft * 10) + (currentGameState.combo * 50);
        currentGameState.score += points;
    } else {
        btns[optIdx].classList.add('wrong');
        btns[qData.a].classList.add('correct');
        currentGameState.lives--;
        currentGameState.combo = 0;
    }
    
    updateGameUI();
    showExplanation(qData.exp);
    
    if (currentGameState.lives <= 0) {
        document.getElementById('nextGameSlideBtn').innerText = '查看最終成績';
    } else {
         document.getElementById('nextGameSlideBtn').innerText = '進入下一題';
    }
};

function handleTimeout() {
    const qData = currentGameState.questions[currentGameState.currentIndex];
    const btns = document.querySelectorAll('.game-opt-btn');
    if(btns[qData.a]) btns[qData.a].classList.add('correct');
    currentGameState.lives--;
    currentGameState.combo = 0;
    updateGameUI();
    showExplanation("時間到！很可惜，一定要在時間內做出決定喔。" + qData.exp);
}

function showExplanation(text) {
    document.getElementById('exp-content').innerText = text;
    document.getElementById('game-explanation').classList.remove('hidden');
}

document.getElementById('nextGameSlideBtn').onclick = () => {
    if (currentGameState.lives <= 0 || currentGameState.currentIndex === currentGameState.questions.length - 1) {
        showFinalResult();
    } else {
        currentGameState.currentIndex++;
        loadGameQuestion(currentGameState.currentIndex);
        updateGameUI();
    }
};

function showFinalResult() {
    document.getElementById('game-main').classList.add('hidden');
    document.querySelector('.game-header').classList.add('hidden'); // Hide stats header
    document.getElementById('game-result').classList.remove('hidden');
    document.getElementById('total-score').innerText = currentGameState.score;
    
    let rank = '<i class="fa-solid fa-medal"></i> 勞權學徒';
    let color = "#2ed573";
    
    if (currentGameState.score >= 2500) { 
        rank = '<i class="fa-solid fa-fire" style="color: #ff4757;"></i> 勞權戰神'; 
        color = "#ffca28"; 
    } else if (currentGameState.score >= 1500) { 
        rank = '<i class="fa-solid fa-trophy" style="color: #ffca28;"></i> 勞權高手'; 
        color = "#ff9f00"; 
    } else if (currentGameState.score < 500) { 
        rank = '<i class="fa-solid fa-book-open"></i> 勞權小白'; 
        color = "#747d8c"; 
    }
    
    document.getElementById('result-mascot').innerHTML = '';
    const rankEl = document.getElementById('result-rank');
    rankEl.innerHTML = rank; // Changed from innerText to innerHTML
    rankEl.style.color = color;
}

document.getElementById('closeGameBtn').onclick = exitGame;
document.getElementById('exitGameBtn').onclick = exitGame;
document.getElementById('retryGameBtn').onclick = () => startQuizGame(currentGameState.moduleId);

function exitGame() {
    clearInterval(gameTimer);
    document.getElementById('game-overlay').classList.add('hidden');
    document.body.style.overflow = 'auto';
}
