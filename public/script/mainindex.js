// app.js
// 여러 CodeMirror 인스턴스를 초기화하는 함수
function initializeCodeMirrors() {
  // 첫 번째 CodeMirror 인스턴스 초기화
  var codeMirror1 = CodeMirror.fromTextArea(
    document.getElementById("codeMirror1"),
    {
      lineNumbers: true,
      mode: "javascript",
    }
  );

  // 두 번째 CodeMirror 인스턴스 초기화
  var codeMirror2 = CodeMirror.fromTextArea(
    document.getElementById("codeMirror2"),
    {
      lineNumbers: true,
      mode: "javascript",
    }
  );
  var codeMirror3 = CodeMirror.fromTextArea(
    document.getElementById("codeMirror3"),
    {
      lineNumbers: true,
      mode: "javascript",
    }
  );
  // 추가 CodeMirror 인스턴스 초기화 (필요한 만큼 반복)
  // var codeMirror3 = CodeMirror.fromTextArea(document.getElementById('codeMirror3'), {
  //   lineNumbers: true,
  //   mode: 'javascript'
  // });

  // 필요한 만큼 더 많은 CodeMirror 인스턴스를 초기화할 수 있음
}

// 페이지가 로드될 때 CodeMirror 인스턴스 초기화 함수 호출
window.onload = function () {
  initializeCodeMirrors();
};
