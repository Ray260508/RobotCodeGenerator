# FRC Robot Code Generator

A browser-based generator that helps FRC teams configure robot mechanisms and download starter Java code projects.

## Live Demo

- [Open the live demo](https://ray260508.github.io/RobotCodeGenerator/)

## What This Project Does

- Lets you configure drivetrain + mechanisms in a UI.
- Generates WPILib-style project code as a ZIP download.
- Supports two code patterns for teams with different experience levels.

## Supported Frameworks

- AdvantageKit (default)
- CommandBase

## Supported Mechanisms

- Chassis (swerve/tank)
- Elevator
- Shooter
- Intake
- Roller
- Launcher
- Arm
- Vision
- StateMachine integration

## Local Development Setup

This project uses Vite with vanilla JavaScript ES modules.

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
3. Build production output:
   `npm run build`

## Known Limitations

- Generated code is a strong starting point, but teams should still tune constants (especially PID/feedforward) on their real robot.
- SysId guidance depends on WPILib tooling workflow familiarity.
- Some advanced team-specific architectures may require manual changes after generation.

## Audience

This repo is designed for FRC students, including teams new to web tooling. If you're new to npm or Vite, start with the Local Development Setup section and iterate from there.
