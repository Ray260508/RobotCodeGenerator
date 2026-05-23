# Changelog

All notable changes to this project will be documented in this file.

## [0.1.1] - 2026-05-24

- Fixed home-page section navigation so `Features` and `Architecture` reliably smooth-scroll to the correct landing sections.
- Fixed SysId guide loading path behavior for production builds by serving the partial from `public/pages/sysid.html`.
- Updated landing navigation link for StateMachine Graph to `https://ray260508.github.io/StateMachineGraph/`.
- Improved 3D viewport mechanism rendering:
  - Arm now renders as a DoF-dependent articulated multi-link model.
  - Roller now renders as a flat square plate with chassis-like footprint.
  - Vision model mapping now correctly resolves Limelight keys (`ll3`, `ll3a`, `ll3g`, `ll4`).
- Refined system categorization in UI and README by separating Vision and StateMachine into distinct groups.
- Expanded SysId guidance with practical WPILib/CTRE/REV/6328-oriented tuning notes and edge-case handling.
- Added direct links to essential tooling resources (WPILib VS Code/FRC tools, SysId docs, AdvantageKit, AdvantageScope, CTRE Phoenix/Tuner X, REV tools).
- Added a vivid downward crystal-star visual effect to the features section.

## [0.1.0] - 2026-05-24

- Initial public pre-1.0 release.
- Added documentation, license, and CI groundwork.
- Improved SysId page structure and configuration UX.
