// 追加のインタラクティブ機能のためのシンプルなJavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 5秒後にアラートを自動非表示
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.opacity = '0';
            setTimeout(() => alert.remove(), 300);
        }, 5000);
    });

    // タスクカードにアニメーションを追加
    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });

    // フォーム検証の強化
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let valid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error-field');
                } else {
                    field.classList.remove('error-field');
                }
            });

            if (!valid) {
                e.preventDefault();
                alert('必須項目をすべて入力してください。');
            }
        });
    });

    // CSSアニメーションの追加
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 0.5s ease-in-out forwards;
            opacity: 0;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .error-field {
            border-color: #dc3545 !important;
            box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.2) !important;
        }

        .btn {
            transition: all 0.3s ease;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
    `;
    document.head.appendChild(style);
});
scripts