window.FILMMAKING_CONTENT = {
  collections: [
    { type: "Collection", title: "Get better at filmmaking", text: "A growing path through story, camera, editing, sound, and visual judgment.", tag: "Core track", tone: "violet" },
    { type: "Collection", title: "Build visual taste", text: "Frames, compositions, references, and small observations worth returning to.", tag: "Visual library", tone: "amber" },
    { type: "Collection", title: "Make something", text: "Experiments, tests, unfinished scenes, and finished work gathered in one place.", tag: "Practice", tone: "blue" },
    { type: "Collection", title: "Publish the process", text: "Useful notes from the work, shared clearly enough to start conversations.", tag: "Opportunity", tone: "rose" }
  ],
  watch: [],
  references: [],
  experiments: [],
  problems: [
    {
      type: "Problem",
      title: "Make generated performance feel human",
      summary: "How do I generate acting, emotion, and dialogue delivery that changes naturally from situation to situation?",
      tags: ["acting", "emotion", "dialogue-delivery", "audio", "prompting", "lighting", "camera-movement", "color-grading", "shot-design"],
      approaches: [
        { label: "01 / EMBODY IT", title: "Act it or record a reference performance", text: "Play the scene yourself, even roughly. Use the recording as a reference for timing, breath, pauses, gesture, eye focus, and the change of intention—not as a demand that the final result copy you exactly." },
        { label: "02 / BUILD THE VOICE FIRST", title: "Generate audio as an emotional performance", text: "Write the character's objective, relationship, obstacle, subtext, and beat changes before generating. Make several takes with different energy, then choose the take whose intention is clearest and cut the picture to that performance." },
        { label: "03 / DIRECT IT WITH A PROMPT", title: "Prompt the situation, not only the tone", text: "Describe what the character wants, what they are hiding, how the relationship changes, where the thought turns, and how breath, pace, pitch, volume, emphasis, and silence should behave. 'Sound emotional' is too vague to direct." }
      ],
      solveWith: [
        "Color grade: choose the emotional temperature, contrast, saturation, and skin-tone treatment that support the scene.",
        "Lighting: decide what the character feels, what remains hidden, and where the audience should look.",
        "Camera angle: choose whose emotional point of view we are inside and what power relationship the angle creates.",
        "Shot design: decide when to stay, cut, reveal, or withhold so the edit follows the emotional change.",
        "Camera movement: let movement respond to a shift in feeling, attention, uncertainty, or physical intention.",
        "Dialogue delivery: give every line an objective, action, and subtext—not just a tone adjective."
      ],
      recordTemplate: "For every new reference, save the video, exact prompt, image references, how it was created, what is special, the emotional target, technical choices, what worked, what failed, the result, and one next experiment. Add tags for the problem, technique, emotion, and tools so it can be found later."
    }
  ],
  study: { promptPath: "study-prompt.txt" }
};
