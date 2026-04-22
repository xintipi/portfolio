# Implementation Plan: CV Sync

## Overview
Update the portfolio React components to synchronize with the provided CV (`public/Nguyen_Huu_Trung_Frontend_Developer.pdf`).

## Proposed Changes

### [MODIFY] `src/components/about/About.jsx`
- Update the description to match the CV details, ensuring the mentions of specific skills like "Backend of the Frontend", "AI Integrations (MCP)", and others are correctly highlighted.
- Currently, it's mostly in sync, but will verify exact wording.

### [MODIFY] `src/components/resume/Resume.jsx`
- Expand the `expData` array to include the specific projects/modules mentioned in the CV:
  - **Next Generation Platform Inc**: Break down or expand description to mention "Smart Email Builder", "Smart Planner", "Smart Calendar", and AI generation/MCP integrations. Since it's a summary card, we will make it concise but highlight these 3 modules.
  - **Gumi Vietnam**: Mention the specific projects (Kadogawa, Pharmacy, Lawyer, Math Content) and the TypeScript migration.

### [MODIFY] `src/components/techStack/TechStack.jsx`
- Add new tech stack items based on the CV:
  - Zustand
  - TanStack
  - REST API / MCP Server (AI)
  - Agile/Scrum (maybe optional, but good to have)
  - Add appropriate `react-icons` for them if available, or text badges.

## Verification Plan
- Review the React UI by checking the component files.
- Run `npm run build` to ensure there are no compilation errors with the new icons and syntax.
