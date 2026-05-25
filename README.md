# FRC Robot Code Generator

A browser-based generator that helps FRC teams configure robot systems and download starter Java code projects.

## Live Demo

- [Open the live demo](https://ray260508.github.io/RobotCodeGenerator/)
- GitHub Pages deploy uses the project base path `/RobotCodeGenerator/`.

## What This Project Does

- Lets you configure drivetrain + robot systems in a UI.
- Generates WPILib-style project code as a ZIP download.
- Supports two code patterns for teams with different experience levels.

## Supported Code Architectures

- AdvantageKit-based architecture (default)
- WPILib command-based template

## Supported Mechanisms

- Chassis (swerve/tank)
- Elevator
- Shooter
- Intake
- Roller
- Launcher
- Arm

## Vision Options

- Vision

## State Logic Options

- StateMachine integration

## Known Limitations

- Generated code is a strong starting point, but teams should still tune constants (especially PID/feedforward) on their real robot.
- SysId guidance depends on WPILib tooling workflow familiarity.
- Some advanced team-specific architectures may require manual changes after generation.

## Audience

This repo is designed for FRC students, including teams new to web tooling.
