// scripts/seed.js
import 'dotenv/config';
import { db } from '../utils/db.js';
import { MockInterview, UserAnswer } from '../utils/schema.js';

async function main() {
  // Seed MockInterview table
  await db.insert(MockInterview).values([
    {
      jsonMockResp: JSON.stringify({ intro: "Welcome!" }),
      jobPosition: 'Frontend Engineer',
      jobDesc: 'Build responsive UIs',
      jobExperience: '2 years',
      createdBy: 'hrithik',
      createdAt: new Date().toISOString(),
      mockId: 'mock001',
    },
    {
      jsonMockResp: JSON.stringify({ intro: "Hello!" }),
      jobPosition: 'Backend Engineer',
      jobDesc: 'Design scalable APIs',
      jobExperience: '3 years',
      createdBy: 'admin',
      createdAt: new Date().toISOString(),
      mockId: 'mock002',
    },
  ]);

  // Seed UserAnswer table
  await db.insert(UserAnswer).values([
    {
      mockIdRef: 'mock001',
      question: 'What is React?',
      correctAns: 'A frontend library',
      userAns: 'A JS UI library',
      feedback: 'Good explanation',
      rating: '5',
      userEmail: 'user@example.com',
      createdAt: new Date().toISOString(),
    },
  ]);

  console.log('✅ Seed complete!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
