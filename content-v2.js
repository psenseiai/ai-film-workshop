// Editable workshop copy. Five of sixteen slides are the film case study.
window.DECK = [
{type:'cover',chapter:'AI SHORT FILM LAB',title:'想像，',accent:'開拍。',subtitle:'AI 短片創作工作坊',body:'故事 × 鏡頭 × 節奏',notes:'七成通用創作方法，三成拆解 Hong Kong Fallen。案例是多輪製作的成品，不是一次生成的成果。'},
{type:'workflow',chapter:'01 / THE PROCESS',title:'一個想法，六個鏡頭。',subtitle:'先做一段 30 秒的短片。',items:[['想故事','一位主角，一個目標'],['設計鏡頭','景別、動作、鏡頭移動'],['生成與挑選','先測試一鏡，再逐段製作'],['剪接與聲音','選用片段，調整節奏']],body:'初學練習：每鏡約 3–5 秒；6 段 × 5 秒 = 30 秒。',notes:'三至五秒是練習起點，不是電影規則。預留選片與修改時間。'},
{type:'tools',chapter:'02 / YOUR TOOLKIT',title:'工具自由揀，效果自己判斷。',subtitle:'AI 助手構思故事，影片工具生成畫面。',notes:'ChatGPT、Claude、Gemini 是 AI 助手產品名稱，以大型語言模型等能力支援構思。分類不是互斥。Gemini 亦有影片功能。可用性依帳戶、模型、地區及方案而定。',sources:[['ChatGPT','https://learn.chatgpt.com/docs/prompting'],['Claude','https://support.claude.com/en/articles/7996845-what-are-some-things-i-can-use-claude-for'],['Gemini','https://support.google.com/gemini/answer/15235907'],['Higgsfield','https://higgsfield.ai/ai-video']]},
{type:'story',chapter:'03 / THE IDEA',title:'主角想要甚麼？',subtitle:'先有目標，觀眾先有理由睇落去。',items:[['主角','一位剛放學的學生'],['目標','趕上最後一班巴士'],['阻礙','發現車站已經消失']],body:'日常、喜劇、科幻都可以。題材由你決定。',notes:'新虛構教學例子，並非 Hong Kong Fallen 劇情。先寫清楚主角、目標及阻礙，再選風格與結尾。'},
{type:'framing',chapter:'04 / SHOT SIZE',title:'同一個人，三種距離。',subtitle:'景別決定觀眾先看到甚麼。',notes:'遠景交代人物與環境，中景閱讀動作，近景強調表情或細節。這些是簡化構圖示意，實際分類依情境而異。'},
{type:'motion',chapter:'05 / CAMERA MOVEMENT',title:'鏡頭點郁，感覺就點變。',subtitle:'選一種鏡頭動作，觀看《Hong Kong Fallen》實際片段。',notes:'固定鏡頭保留上傳原片完整 10.08 秒、720p 畫質及原聲；其餘示範約 4.5 秒。比較固定、推近、跟拍和揭示如何引導觀眾視線。'},
{type:'rhythm',chapter:'06 / CUT & RHYTHM',title:'3–5 秒，一次切鏡練習。',subtitle:'一個鏡頭完成一個主要動作。',notes:'影格是影片中的單張畫面；鏡頭是一段連續畫面；切鏡是轉到下一個鏡頭。24fps下3秒有72格，5秒有120格。三至五秒是練習建議，對白、動作和情緒會改變鏡頭長度。生成片段可長於最終選用片段。'},
{type:'prompt',chapter:'07 / DIRECT WITH WORDS',title:'提示詞，就係導演指示。',subtitle:'先寫畫面，再寫角色與鏡頭動作。',items:[['主體與場景','學生站在雨夜車站'],['景別與光線','中景，街燈照亮面部'],['角色動作','抬頭望向空白路牌'],['鏡頭移動','緩慢推近，保持服裝一致']],notes:'通用教學描述，不保證任何平台都準確生成。一次只加一個主要動作，先試一個短鏡頭。'},
{type:'checks',chapter:'08 / THE REALITY CHECK',title:'寫到，未必生成得到。',subtitle:'先測一個鏡頭，再投入整段故事。',items:[['故事','目標清楚？前後連貫？'],['工具','帳戶有需要的影片與參考圖功能？'],['畫面','人物、動作及空間是否穩定？']],body:'未達預期：拆細動作、修改要求、換鏡，或選用合適工具。',notes:'用相同故事要求比較。留意成本、額度、片長和平台內容規範。用實際結果驗收。'},
{type:'caseintro',chapter:'CASE STUDY / 1 OF 5',title:'Hong Kong Fallen',subtitle:'一個完成品，拆開五個製作決定。',image:6,body:'故事取捨 / 分鏡 / 角色一致 / 選片 / 聲音',notes:'用戶確認成品花了很多時間。五頁案例佔十六頁約31%。採用既有素材和報告，不宣稱一次提示詞就完成。可另開影片播放，網頁未嵌入成片。'},
{type:'storyboard',chapter:'CASE STUDY / 2 OF 5',title:'把大故事，縮成 30 秒。',subtitle:'教學重排示例，每段 5 秒。',items:[[15,'00–05','危機'],[1,'05–10','主角'],[5,'10–15','威脅'],[4,'15–20','行動'],[19,'20–25','懸念'],[0,'25–30','片名']],body:'教學改編時間線，並非原成片的精確剪接。',notes:'六段各五秒，共三十秒。搜索留下危機，片名收結。片名卡是剪接段落，不一定是拍攝鏡頭。'},
{type:'compare',chapter:'CASE STUDY / 3 OF 5',title:'換咗鏡頭，仲係同一個人？',subtitle:'參考圖是起點，連貫性要逐鏡檢查。',items:[[3,'外觀與裝備','面貌、髮型、服裝、袖章'],[4,'動作與光線','姿勢、道具位置、光線方向']],notes:'兩個原片鏡頭的觀察比較，不是修復前後效果。角色名稱不能保證一致。'},
{type:'annotate',chapter:'CASE STUDY / 4 OF 5',title:'精彩，都要識得刪。',subtitle:'選用連貫的部分，捨棄突變。',image:12,items:[['人物','面貌與裝備有沒有改變？'],['空間','機艙與窗外位置是否合理？'],['處理','縮短、換鏡或重新生成。']],notes:'本地剪接報告記錄裝備及空間變化。需播放完整片段檢查，單張畫面不能證明動作連貫。'},
{type:'cast',chapter:'CASE STUDY / 5 OF 5',title:'聲音，帶住觀眾入戲。',subtitle:'先看無配樂版本，再聽加上聲音的版本。',items:[[17,'環境','警報建立危機'],[7,'人物','對白清楚優先'],[8,'節奏','配樂推進，片名前留白']],notes:'現場用原片展示聲音差別。本頁是說明，未嵌入A/B音訊。音效要與畫面對應，避免蓋過對白。'},
{type:'workflow',chapter:'09 / LIVE DEMO',title:'而家，試一個鏡頭。',subtitle:'同一方法，可以套用到自己的故事。',items:[['構思','主角準備做甚麼？'],['構圖','遠景、中景，還是近景？'],['生成','一個動作，一種運鏡'],['剪接','選 3–5 秒可用片段，加聲音']],body:'完成一個可用鏡頭，再擴展成一段短片。',notes:'準備備用片段。等待生成時講解選片與失敗案例。不承諾固定生成時間。'},
{type:'end',chapter:'10 / YOUR TURN',title:'唔使跟我個故事。',subtitle:'下一幕，由你決定。',body:'自由選擇題材、角色與 AI 工具。',takeaway:'入門目標：6 格分鏡 / 約 30 秒短片',notes:'每鏡3–5秒是起點，按故事需要調整。片名可計入六段。評估故事、畫面與聲音，片尾註明AI生成及素材來源。'}
];


