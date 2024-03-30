// 手を選択するボタンの要素を取得
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

// 結果表示用の要素を取得
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');

// ゲームの勝敗を判定する関数
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'あいこ';
  } else if (
    (playerChoice === 'グー' && computerChoice === 'チョキ') ||
    (playerChoice === 'パー' && computerChoice === 'グー') ||
    (playerChoice === 'チョキ' && computerChoice === 'パー')
  ) {
    return '勝ち';
  } else {
    return '負け';
  }
}

// コンピューターの手を決める関数
function getComputerChoice() {
  const choices = ['グー', 'パー', 'チョキ'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// プレイヤーが手を選んだ時の処理
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);

  playerChoiceDisplay.textContent = `プレイヤーの手: ${playerChoice}`;
  computerChoiceDisplay.textContent = `コンピューターの手: ${computerChoice}`;
  resultDisplay.textContent = `結果: ${result}`;
}

// ボタンクリックイベントリスナーを設定
rockBtn.addEventListener('click', () => playGame('グー'));
paperBtn.addEventListener('click', () => playGame('パー'));
scissorsBtn.addEventListener('click', () => playGame('チョキ'));