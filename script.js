
    function toggleMenu() {
      const nav = document.getElementById('navlist');
      if (nav) nav.classList.toggle('active');
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        const nav = document.getElementById('navlist');
        if (nav && nav.classList.contains('active')) nav.classList.remove('active');
      }
    });

    // Change Text Effect for only 2 words
    function changeText() {
      words.forEach(w => w.classList.remove('active'));
      const curr = words[current]; const nextIndex = (current + 1) % words.length; const next = words[nextIndex];
      Array.from(curr.children).forEach((l, i) => setTimeout(() => l.className = 'letter out', i * 80));
      next.style.opacity = '1'; next.classList.add('active');
      Array.from(next.children).forEach((l, i) => { l.className = 'letter behind'; setTimeout(() => l.className = 'letter in', 340 + i * 80); });
      current = nextIndex;
    }

    // Wrap letters on load
    words.forEach(w => {
      const letters = w.textContent.split(''); w.textContent = '';
      letters.forEach(ch => {
        const span = document.createElement('span');
        span.textContent = ch; span.className = 'letter';
        w.append(span);
      });
    });
    setInterval(changeText, 3000);
    
    const texts = document.querySelectorAll('.text');
    // مؤشر يتتبع الكلمة الحالية
    let currentIndex = 0;
    // دالة يتم تنفيذها كل 3 ثواني لتبديل الكلمة الظاهرة
    setInterval(() => {
      // إزالة كلاس active من الكلمة الحالية (لتجعلها تختفي)
      texts[currentIndex].classList.remove('active');
      // تحديث المؤشر ليشير إلى الكلمة التالية (أو العودة للأولى في نهاية القائمة)
      currentIndex = (currentIndex + 1) % texts.length;
      // إضافة كلاس active إلى الكلمة الجديدة (لتجعلها تظهر)
      texts[currentIndex].classList.add('active');
    }, 3000); // 3000 مللي ثانية = 3 ثواني
    
    const words = document.querySelectorAll('.text-wrapper span');
    let current = 0;

    setInterval(() => {
      words[current].classList.remove('active');
      current = (current + 1) % words.length;
      words[current].classList.add('active');
    }, 3000);