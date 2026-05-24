// ============================================================
// tasks.js  —  タスクデータ・設定・翻訳
// ここだけ編集すればタスク内容を変更できます
// ============================================================

export const CONFIG = {
  // 隔週リセット基準日（月曜 05:00 を基準に2週サイクル）
  biweeklyBaseDate: '2026-05-11',
};

// ------------------------------------------------------------
// 翻訳テキスト
// ------------------------------------------------------------
export const I18N = {
  ja: {
    siteTitle:       'NTEチェッカー',
    daily:           'デイリー',
    weekly:          'ウィークリー',
    biweekly:        '隔週',
    settingsTitle:   'タスク設定',
    taskVisibility:  'タスク表示設定',
    customTasks:     'カスタムタスク',
    addTask:         '追加',
    taskPlaceholder: 'タスク名を入力',
    nextReset:       '次のリセットまで',
    d:               '日',
    h:               '時間',
    m:               '分',
    allDone:         '✓ すべて完了！',
    noCustomTasks:   '（なし）',
  },
  en: {
    siteTitle:       'NTE Checker',
    daily:           'Daily',
    weekly:          'Weekly',
    biweekly:        'Biweekly',
    settingsTitle:   'Task Settings',
    taskVisibility:  'Task Visibility',
    customTasks:     'Custom Tasks',
    addTask:         'Add',
    taskPlaceholder: 'Enter task name',
    nextReset:       'Next reset in',
    d:               'd',
    h:               'h',
    m:               'm',
    allDone:         '✓ All done!',
    noCustomTasks:   '(none)',
  },
};

// ------------------------------------------------------------
// タスク一覧
// id は重複しないユニークな値にすること
// ja / en にそれぞれ表示テキストを記載
// ------------------------------------------------------------
export const TASKS = {
  daily: [
    { id: 'd1', ja: 'デイリークエスト',                      en: 'Daily Quests' },
    { id: 'd2', ja: '本性ピクセルを消費する（スタミナ）',      en: 'Consume Resonance Pixels (Stamina)' },
    { id: 'd3', ja: '魔女の家を訪問する',                    en: "Visit the Witch's House" },
    { id: 'd4', ja: '喫茶店を経営する',                      en: 'Manage the Coffee Shop' },
    { id: 'd5', ja: 'ナクペダの池を訪問する',                en: "Visit Nakpeda's Pond" },
    { id: 'd6', ja: 'キャラクターにギフトを贈る（1日10回）',   en: 'Give Character Gifts (10/day)' },
    { id: 'd7', ja: '不法行為を取り締まる',                  en: 'Stop Illegal Activity' },
  ],
  weekly: [
    { id: 'w1', ja: '異常巡礼（週3回まで）',   en: 'Anomaly Pilgrimage (up to 3x/week)' },
    { id: 'w2', ja: '都市スタミナを消費する',  en: 'Consume City Stamina' },
    { id: 'w3', ja: 'オークションハウスを確認', en: 'Check Auction House' },
  ],
  biweekly: [
    { id: 'b1', ja: 'にくきゅう大強盗', en: 'Pink Paws Heist' },
  ],
};
