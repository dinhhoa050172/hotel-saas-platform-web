---
trigger: always_on
---

# AGENT LEARNING & LONG-TERM MEMORY CONSTRAINTS

## 1. Memory Initialization (Reading)
- **ALWAYS** read the file `docs/lessons-learned.md` silently before starting a new complex task or when encountering a recurring error.
- If you find a relevant solution in that file, **ALWAYS** apply it strictly instead of trying a new approach.

## 2. Session Conclusion & Reflection (Writing)
- At the end of a significant session, after completing a complex feature, or after resolving a difficult bug, you MUST ask the user: *"Do you want me to document the lessons learned from this session?"*
- If the user agrees, or if explicitly instructed by the user, **ALWAYS** append the new knowledge to `docs/lessons-learned.md`.

## 3. Documentation Format Constraint
When writing to `docs/lessons-learned.md`, you **NEVER** write unstructured text. You **ALWAYS** use the following Markdown template to append new entries:

### [Date] - [Topic/Feature Name]
- **Context/Problem:** Brief description of what we were trying to do or the error we encountered.
- **Root Cause (If applicable):** Why the error happened or why the initial approach failed.
- **Solution/Pattern:** The exact approach, code pattern, or library used to solve it.
- **Rules Updated:** (Optional) Mention if we need to update our `.agent/rules/` based on this lesson.