---
trigger: always_on
---

# HOTEL DOMAIN & BUSINESS LOGIC CONSTRAINTS

## 1. Date & Time Handling (CRITICAL)
- **ALWAYS** use `date-fns` for all date manipulations, comparisons, and formatting.
- **NEVER** use the native JavaScript `Date` object directly for arithmetic (e.g., `date1 - date2`).
- Standard Check-in time is 14:00. Standard Check-out time is 12:00.

## 2. Booking Logic
- Room availability constraint: A room is considered "Available" ONLY IF it has no confirmed bookings where: `(NewCheckIn < ExistingCheckOut) AND (NewCheckOut > ExistingCheckIn)`.
- **ALWAYS** calculate prices dynamically on the server based on `RoomType` base price, seasonal modifiers, and weekend surcharges. NEVER trust client-side price calculations.

## 3. Folder Structure Enforcement
- B2C (Customer Facing): Must be placed inside `app/(b2c)/`.
- B2B (Admin/Staff): Must be placed inside `app/(b2b)/admin/`.
- Reusable logic per feature: Must be placed inside `src/features/[feature-name]/`.