<script>
    import authorPic from "$assets/profile_pic.jpeg";
</script>

<section class="landing-page-section">
    <h2 class="mb-l">About the author</h2>
    <div class="author-container">
        <div class="author-text">
            <p class="mb-xs">
                Newon: A Dedicated iOS Developer Newon is a seasoned iOS
                developer with a passion for crafting innovative and
                user-centric applications. With 5 years of experience in the
                field, Newon has honed their skills in a variety of iOS
                technologies, including SwiftUI, UIKit, Core Data, and ARKit. A
                Proven Track Record Newon's dedication to excellence is evident
                in their impressive portfolio of projects. They have
                successfully developed 10 iOS applications, each designed to
                provide seamless user experiences.
            </p>
            <p>
                Some of their notable projects include: Fitness Tracker Pro: A
                comprehensive fitness app that tracks workouts, calories burned,
                and sleep patterns. AR City Guide: An augmented reality app that
                provides interactive city tours and historical information. Zen
                Garden: A calming meditation app that helps users reduce stress
                and anxiety. A Commitment to Open Source Beyond their
                professional work, Newon actively contributes to the open-source
                community.
            </p>
        </div>
        <img src={authorPic} alt="Author Newon" />
    </div>
</section>

<style>

    .author-container {
        display: flex;
        justify-content: space-between;
    }

    .author-container img {
        width: 40%;
        border: 6px solid black;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
    }

    .author-text {
        width: 55%;
    }
</style>
