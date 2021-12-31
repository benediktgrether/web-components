import { UserCard } from './components/userCard';

document.addEventListener('readystatechange', function(event) {
    if (document.readyState === "complete") {
        console.log(document.readyState);
        window.customElements.define('user-card', UserCard);
    }
});