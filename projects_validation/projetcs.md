Recent复现项目

**VLA:**
TurboVLA: Real-Time Vision-Language-Action Model at 32 Hz on an RTX 4090 with <1 GB VRAM,2026,Jetson Thor 128GB, evaluation On LIBERO_goal\object\spatial,https://github.com/H-EmbodVis/TurboVLA.git . Support Mujoco video visualization.

Isaac Lab (NVIDIA's GPU-accelerated, open-source framework designed to unify and simplify robotics research workflows, such as reinforcement learning, imitation learning, and motion planning. Built on NVIDIA Isaac Sim), 2026, Jetson Thor 128GB, evaluation On LIBERO_goal\object\spatial,https://github.com/isaac-sim/IsaacLab.git . Isaac Sim software can't load 3D resources on Jetson Thor (exceed capability), but original training process of RL is feasible, and inference visualiztion is available on Newton/Web.

**World Models:**
ABot-World-0: Infinite Interactive World Rollout on a Single Desktop GPU ,2026,Jetson Thor 128GB,https://github.com/amap-cvlab/ABot-World.git . generative scene < 10 FPS. Tips: Jetson Thor do not support sageattention to accelerate, but flashattention4 is available (need some tiny code adaption in the repo, changing flashattn2 to flashattn4).

**Large Models**
Minimax-h3(https://github.com/MiniMax-AI/MiniMax-H3.git) employed on ComyUI(https://github.com/Comfy-Org/ComfyUI.git), open-sourced video generated large models, 2026,Jetson Thor 128GB, generated video link: https://www.bilibili.com/video/BV1tzuZ6NEu7/?spm_id_from=333.1387.homepage.video_card.click&vd_source=46bc9a193163efea57c3aa8b4d573ee7