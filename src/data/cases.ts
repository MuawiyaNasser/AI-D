import { Case } from '../types';

export const cases: Case[] = [
  {
    id: '1',
    title: 'Playground Fall',
    description: 'A 7-year-old child has fallen from playground equipment. The child is conscious but crying and holding their arm.',
    difficulty: 'easy',
    initialPrompt: 'What should I do for a child who has fallen and might have a broken arm?',
  },
  {
    id: '2',
    title: 'Kitchen Burn',
    description: 'An adult has spilled hot cooking oil on their hand. The skin is red and painful, but no blisters are present yet.',
    difficulty: 'easy',
    initialPrompt: 'How do I treat a first-degree burn from cooking oil?',
  },
  {
    id: '3',
    title: 'Bicycle Accident',
    description: 'A cyclist has collided with a car at low speed. They are conscious but disoriented, with abrasions on their legs and a possible head injury.',
    difficulty: 'medium',
    initialPrompt: 'How should I assess and help a cyclist who might have a concussion after an accident?',
  },
  {
    id: '4',
    title: 'Workplace Laceration',
    description: 'A coworker has cut their arm on a piece of machinery. The wound is about 2 inches long and bleeding steadily.',
    difficulty: 'medium',
    initialPrompt: 'What steps should I take to control bleeding from a deep cut?',
  },
  {
    id: '5',
    title: 'Sudden Collapse',
    description: 'An elderly person has suddenly collapsed at a shopping center. They are unresponsive and not breathing normally.',
    difficulty: 'critical',
    initialPrompt: 'How do I perform CPR on an elderly person who has collapsed and is not breathing?',
  },
  {
    id: '6',
    title: 'Severe Allergic Reaction',
    description: 'A friend has developed hives, facial swelling, and difficulty breathing after eating at a restaurant.',
    difficulty: 'critical',
    initialPrompt: 'What should I do for someone experiencing a severe allergic reaction with breathing difficulties?',
  },
];