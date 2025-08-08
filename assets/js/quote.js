// Modern ES6+ Quote Database with more inspiring quotes
const quoteDatabase = [
	{
		quote: "Be yourself; everyone else is already taken.",
		author: "Oscar Wilde"
	},
	{
		quote: "So many books, so little time.",
		author: "Frank Zappa"
	},
	{
		quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		author: "Dr. Seuss"
	},
	{
		quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
		author: "J.K. Rowling"
	},
	{
		quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
		author: "Maya Angelou"
	},
	{
		quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
		author: "Martin Luther King Jr."
	},
	{
		quote: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
		author: "Maurice Switzer"
	},
	{
		quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
		author: "William Shakespeare"
	},
	{
		quote: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
		author: "Mark Twain"
	},
	{
		quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
		author: "Bil Keane"
	},
	{
		quote: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
		author: "Douglas Adams"
	},
	{
		quote: "Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.",
		author: "Neil Gaiman"
	},
	{
		quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
		author: "Lao Tzu"
	},
	{
		quote: "If you can't explain it to a six year old, you don't understand it yourself.",
		author: "Albert Einstein"
	},
	{
		quote: "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
		author: "Groucho Marx"
	},
	{
		quote: "There is no friend as loyal as a book.",
		author: "Ernest Hemingway"
	},
	{
		quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
		author: "Winston S. Churchill"
	},
	{
		quote: "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
		author: "Marilyn Monroe"
	},
	{
		quote: "First they ignore you. Then they ridicule you. And then they attack you and want to burn you. And then they build monuments to you.",
		author: "Nicholas Klein"
	},
	{
		quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
		author: "John Lennon"
	},
	{
		quote: "The only way to do great work is to love what you do.",
		author: "Steve Jobs"
	},
	{
		quote: "Innovation distinguishes between a leader and a follower.",
		author: "Steve Jobs"
	},
	{
		quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
		author: "Steve Jobs"
	},
	{
		quote: "The future belongs to those who believe in the beauty of their dreams.",
		author: "Eleanor Roosevelt"
	},
	{
		quote: "It is during our darkest moments that we must focus to see the light.",
		author: "Aristotle"
	}
]

// Modern JavaScript with enhanced functionality
class QuoteGenerator {
    constructor() {
        this.quotes = quoteDatabase;
        this.currentQuoteIndex = 0;
        this.lastQuoteIndex = -1;
        this.colors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'linear-gradient(135deg, #ff8a80 0%, #ea80fc 100%)',
            'linear-gradient(135deg, #81c784 0%, #aed581 100%)',
            'linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%)'
        ];
        this.init();
    }

    init() {
        this.bindEvents();
        this.displayRandomQuote();
    }

    bindEvents() {
        // New Quote button
        $('#new-quote-btn').on('click', () => this.handleNewQuote());
        
        // Copy quote functionality
        $('.copy-quote-button').on('click', (e) => this.handleCopyQuote(e));
        
        // Keyboard navigation
        $(document).on('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                this.handleNewQuote();
            }
        });
    }

    getRandomQuoteIndex() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.quotes.length);
        } while (newIndex === this.lastQuoteIndex && this.quotes.length > 1);
        
        this.lastQuoteIndex = newIndex;
        return newIndex;
    }

    getRandomGradient() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    async handleNewQuote() {
        const button = $('#new-quote-btn');
        const icon = button.find('i');
        
        // Add loading state
        button.prop('disabled', true);
        icon.addClass('fa-spin');
        
        try {
            await this.displayRandomQuote();
        } finally {
            // Remove loading state
            setTimeout(() => {
                button.prop('disabled', false);
                icon.removeClass('fa-spin');
            }, 500);
        }
    }

    async handleCopyQuote(e) {
        e.preventDefault();
        
        const quoteText = $('#quote').text();
        const authorText = $('#author').text();
        const fullText = `"${quoteText}" - ${authorText}`;
        
        try {
            await navigator.clipboard.writeText(fullText);
            this.showCopyFeedback(e.currentTarget);
        } catch (err) {
            // Fallback for older browsers
            this.fallbackCopyToClipboard(fullText);
            this.showCopyFeedback(e.currentTarget);
        }
    }

    showCopyFeedback(element) {
        const originalIcon = $(element).find('i');
        const originalClass = originalIcon.attr('class');
        
        originalIcon.attr('class', 'fas fa-check fa-2x');
        
        setTimeout(() => {
            originalIcon.attr('class', originalClass);
        }, 1500);
    }

    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    async displayRandomQuote() {
        const index = this.getRandomQuoteIndex();
        const selectedQuote = this.quotes[index];
        const gradient = this.getRandomGradient();

        // Update background
        $('body').css('background', gradient);

        // Update Twitter share URL
        const twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&text="${encodeURIComponent(selectedQuote.quote)}" ${encodeURIComponent(selectedQuote.author)}`;
        $('.twitter-share-button').attr('href', twitterUrl);

        // Animate quote change
        await this.animateQuoteChange(selectedQuote);
    }

    animateQuoteChange(quoteData) {
        return new Promise((resolve) => {
            // Fade out current content
            $('#quote-content').fadeOut(300, () => {
                // Update content
                $('#quote').text(quoteData.quote);
                $('#author').text(quoteData.author);
                
                // Fade in new content
                $('#quote-content').fadeIn(300, resolve);
            });
        });
    }
}

// Initialize the quote generator when DOM is ready
$(document).ready(() => {
    new QuoteGenerator();
});

// Add some additional modern features
document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard accessibility
    const button = document.getElementById('new-quote-btn');
    if (button) {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    }
    
    // Add touch support for mobile
    let touchStartY = 0;
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        
        // Swipe up to get new quote
        if (diff > 50) {
            const event = new Event('click');
            button.dispatchEvent(event);
        }
    });
});

